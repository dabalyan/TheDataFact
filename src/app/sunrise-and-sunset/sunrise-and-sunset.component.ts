import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {getTimes, GetTimesResult} from 'suncalc'
import * as findTimeZone from 'tz-lookup';
import {DateTime} from 'luxon';

type CityData = [string, string, string, string];

@Component({
  selector: 'app-sunrise-and-sunset',
  templateUrl: './sunrise-and-sunset.component.html',
  styleUrls: ['./sunrise-and-sunset.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SunriseAndSunsetComponent implements OnInit, OnDestroy {
  cities: string[][];
  countries: string[][] = [];
  selectedCountry = '';
  searchSubject = new BehaviorSubject<string>(null);
  maxSearchResults = 200;
  showSearchResults = false;
  searchResults: number[] = [];
  selectedCitiesIndices: number[] = [];
  selectedCitiesSunriseSunset: { index: string, city: CityData, times: GetTimesResult }[];

  chartData;
  readonly startDate = DateTime.now().setZone('utc').startOf('year');
  readonly todayDate = DateTime.now().setZone('utc').startOf('day');
  selectedDate;
  dayOfYearOffset = 0;
  intervalRef;

  readonly searchResultsStream = this.searchSubject
                                     .pipe(
                                       debounceTime(200),
                                       map(s => this.search(s))
                                     )
                                     .subscribe();

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
    document.body.classList.add('flex-app');

    await this.fetchCities();

    this.route.queryParams.subscribe(() => {
      this.initReset();
    });
  }

  initReset(): void {
    if (!this.cities?.length) {
      return;
    }

    const queryParams = this.route.snapshot.queryParams;
    let preselected = `74547,19195,61207,98948,30179,64252,43123,36830,77724,53545,50542,109921,66954,102484,118404,76355,16,32275,139919,75801,88342,113328,81382,121570,59481,14089,5720,91503,13055`;
    preselected = `74547,19195,61207,30179,64252,43123,53545,50542,109921,66954,118404,76355,16,139919,113328,121570,14089,5720,13055,36830`;
    const queryCities = (queryParams['cities']?.trim() || preselected)
      .split(',')
      .map(s => isNaN(Number(s)) ? null : Number(s)) as number[];

    this.selectedCitiesIndices = [...new Set(queryCities)];
    this.generateChartData();

    if (this.intervalRef) {
      return;
    }
    setTimeout(() => {
      this.autoPlay();
    }, 2000);
  }

  dayChangedByUser(offset: string): void {
    this.stopAutoPlaying();
    this.dayOfYearOffset = +offset;
    this.generateChartData();
  }

  autoPlay(): void {
    this.stopAutoPlaying();
    this.intervalRef = setInterval(() => {
      this.generateChartData();
      this.dayOfYearOffset += 1;
      this.dayOfYearOffset %= 365;
    }, 300);
  }

  stopAutoPlaying(): void {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
      this.intervalRef = null;
    }
  }

  identifyItem(index, item): void {
    return item.index;
  }

  async fetchCities() {
    const countriesCsv = await (await fetch('assets/sunrise-and-sunset/countries_codes_and_coordinates.csv')).text();
    const citiesCsv = await (await fetch('assets/sunrise-and-sunset/cities.csv')).text();

    this.cities = citiesCsv
      .split('\n')
      .slice(1)
      .map((row) => {
        const [country, city, lat, lng] = row.split(',');
        return [country, city, lat, lng].map(s => s?.trim());
      })
      .filter(([country, city]) => country && city);

    this.countries = countriesCsv
      .split('\n')
      .slice(1)
      .map((row) => {
        const [name, code] = row.split(',');
        return [name, code].map(s => s?.trim());
      })
      .filter(([name, code]) => name && code);
  }

  generateChartData(): void {
    this.generateSunriseSunset();

    const padTime = hourMinute => String(hourMinute).padStart(2, '0');

    this.chartData =
      this.selectedCitiesSunriseSunset
          .map(({index, city, times}) => {
            const tz = findTimeZone(+city[2], +city[3]);
            const sunrise = DateTime.fromJSDate(times.sunrise).setZone(tz);
            const sunset = DateTime.fromJSDate(times.sunset).setZone(tz);
            return [index, city, sunrise, sunset] as [string, CityData, DateTime, DateTime];
          })
          .sort((a, b) => +a[1][2] - +b[1][2])
          .map(
            ([index, city, sunrise, sunset]) => {
              const startPos = 100 * (sunrise.hour * 60 + sunrise.minute) / (24 * 60);
              const endPos = 100 * (sunset.hour * 60 + sunset.minute) / (24 * 60);
              const sunriseTime = padTime(sunrise.hour) + ':' + padTime(sunrise.minute);
              const sunsetTime = padTime(sunset.hour) + ':' + padTime(sunset.minute);
              return {index, city, startPos, endPos: endPos < startPos ? 100 : endPos, sunriseTime, sunsetTime};
            });
  }

  generateSunriseSunset(): void {
    const utcDateZeroTime = this.selectedDate = this.startDate.plus({days: this.dayOfYearOffset}).toJSDate();

    this.selectedCitiesSunriseSunset = this.selectedCitiesIndices.map(index => {
      const city = this.cities[index];
      return {index, city, times: getTimes(utcDateZeroTime, +city[2], +city[3])} as any;
    });
  }

  search(s): number[] {
    s = s?.toLowerCase().trim();
    if (!s?.trim() || !this.cities?.length) {
      return (this.searchResults = []);
    }

    const results: number[] = [];

    this.cities.find((city, index) => {
      if ((!this.selectedCountry || this.selectedCountry === city[0]) && city[1].toLowerCase().startsWith(s)) {
        results.push(index);
      }
      return results.length >= this.maxSearchResults;
    });

    if (results.length >= this.maxSearchResults) {
      return (this.searchResults = results);
    }

    this.cities.find((city, index) => {
      const name = city[1].toLowerCase();
      if ((!this.selectedCountry || this.selectedCountry === city[0]) && !name.startsWith(s) && name.includes(s)) {
        results.push(index);
      }
      return results.length >= this.maxSearchResults;
    });

    return (this.searchResults = results);
  }

  toggleCity(cityIndex: number, remove = false): void {
    const cities = remove ? this.selectedCitiesIndices.filter(i => i !== cityIndex) : [
      ...this.selectedCitiesIndices, cityIndex
    ];

    this.navigate({cities: cities.join(',')});
  }

  navigate(queryParams: Record<string, any>): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true
    })
  }

  ngOnDestroy(): void {
    document.body.classList.remove('flex-app');
    this.stopAutoPlaying();
  }
}
