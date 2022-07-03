import {Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {getTimes, GetTimesResult} from 'suncalc'
import * as findTimeZone from 'tz-lookup';
import * as Highcharts from 'highcharts';
import {GenerateChartOptions} from '../utils/highcharts-helpers';
import {COLORS} from '../app.meta';
import {DateTime} from 'luxon';

const generateChartOptions = (series, categories): Highcharts.Options =>
  GenerateChartOptions({
    chart: {
      type: 'columnrange'
    },
    xAxis: {
      type: 'category',
      categories: categories.map(([index, country, city]) => city),
      labels: {
        useHTML: true,
        formatter() {
          const point = this;
          return `<img class="country-flag"
src="https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/${categories[point.pos][1].toLowerCase()}.svg" />
<span>${point.value}</span>`;
        }
      }
    },
    yAxis: {
      visible: false,
      min: 0,
      max: 24,
      opposite: false,
      title: {text: null}
    },
    legend: {
      reversed: true,
      verticalAlign: 'top',
    },
    plotOptions: {
      columnrange: {
        pointWidth: 42,
        dataLabels: {
          enabled: true,
          useHTML: true,
          inside: true,
          formatter() {
            const point = this;
            return `<span style="font-size: 10px">${String(Math.floor(point.y)).padStart(2, '0')}:${String(Math.floor((point.y % 1) * 60)).padStart(2, '0')}</span>`;
          },
        }
      }
    },
    series
  });

@Component({
  selector: 'app-sunrise-and-sunset',
  templateUrl: './sunrise-and-sunset.component.html',
  styleUrls: ['./sunrise-and-sunset.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SunriseAndSunsetComponent {
  readonly Highcharts: typeof Highcharts = Highcharts;
  allChartsConfig = [];
  chart: Highcharts.Chart;

  cities: string[][];
  countries: string[][] = [];
  selectedCountry = '';
  searchSubject = new BehaviorSubject<string>(null);
  maxSearchResults = 200;
  showSearchResults = false;
  searchResults: number[] = [];
  selectedCitiesIndices: number[] = [];
  selectedCitiesSunriseSunset: [number, string, string, string, string, GetTimesResult][];

  readonly searchResultsStream = this.searchSubject
                                     .pipe(
                                       debounceTime(200),
                                       map(s => this.search(s))
                                     )
                                     .subscribe();

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
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
    const preselected = `74547,19195,61207,98948,30179,64252,11832,91686,16406,43123,36830,77724,53545,91055,39831,50542,109921,66954,102484,118404,76355,4832,59481,16,32275,139919,75801,88342,114603,140046,113328,22084,81382,121570`;
    const queryCities = (queryParams['cities']?.trim() || preselected)
      .split(',')
      .map(s => isNaN(Number(s)) ? null : Number(s)) as number[];

    this.selectedCitiesIndices = [...new Set(queryCities)];
    this.generateSunriseSunset();

    const sunriseAndSunsetSeries = {name: 'Sunrise and Sunset', data: [], color: COLORS[0]};

    const selectedCitiesBySunrise = this.selectedCitiesSunriseSunset.map((city) => {
      const tz = findTimeZone(+city[3], +city[4]);
      const sunrise = DateTime.fromJSDate(city[5].sunrise).setZone(tz);
      const sunset = DateTime.fromJSDate(city[5].sunset).setZone(tz);
      return [city, sunrise, sunset] as [any, DateTime, DateTime];
    }).sort((a, b) => a[0][4] - b[0][4]);

    selectedCitiesBySunrise.forEach(([city, sunrise, sunset]) => {
      sunriseAndSunsetSeries.data.push([
        +(sunrise.hour + sunrise.minute / 60).toFixed(2),
        +(sunset.hour + sunset.minute / 60).toFixed(2)
      ]);
    });

    this.allChartsConfig = [];

    [
      sunriseAndSunsetSeries
    ].forEach(dataSeries => {
      dataSeries = {...dataSeries};

      this.allChartsConfig.push(
        generateChartOptions(
          [dataSeries],
          selectedCitiesBySunrise.map(([[index, country, city]]) => [index, country, city])
        )
      );
    });
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

  generateSunriseSunset(): void {
    const utcDateZeroTime = DateTime.now().setZone('utc').startOf('day').toJSDate();

    this.selectedCitiesSunriseSunset = this.selectedCitiesIndices.map(index => {
      const city = this.cities[index];
      return [index, ...city, getTimes(utcDateZeroTime, +city[2], +city[3])] as any;
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
}
