import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {parse} from 'csv-parse/sync';
import * as Highcharts from 'highcharts';
import {ActivatedRoute, Router} from '@angular/router';
import {COLORS} from '../app.meta';
import {SIZE_MULTIPLIER} from '../utils/constants';
import {GenerateChartOptions, XAxisPlotLinesConfig} from '../utils/highcharts-helpers';

type AqiSummary = { pm25: number, pm10: number, date: string, o3: number, no2: number, so2: number, co: number };
type AqiPollutant = Exclude<keyof AqiSummary, 'date'>

const POLLUTANTS: AqiPollutant[] = ['pm25', 'pm10', 'o3', 'no2', 'so2', 'co'];
const DEFAULT_AQI_POLLUTANT: AqiPollutant = 'pm25';

const DATA_FILES = [
  'anand-vihar', 'alipur', 'dite-wazirpur', 'iti-jahangirpuri', 'ito', 'mundka',
  'narela', 'punjabi-bagh', 'pusa', 'r-k-puram', 'rohini', 'satyawati-college', 'siri-fort',
  'sonia-vihar-djb', 'sri-auribindo-marg', 'us-embassy'
];
const LEAP_YEAR = 2020; // random leap year for max 366 days
const START_DATE = '2020-10-01';

const formatPollutant = pollutant => pollutant === 'pm25' ? 'PM2.5' : pollutant.toUpperCase();

const localiseDate = (date: string | Date): string => {
  try {
    return (typeof date === 'string' ? new Date(date) : date).toLocaleString(undefined, {
      month: 'short', day: 'numeric'
    })
    // return new Date(date).toLocaleDateString();
  } catch {
    return String(date);
  }
};

const generateChartOptions = (series, plotLines, yAxisLabel, yAxisMax, pollutant, year): Highcharts.Options =>
  GenerateChartOptions({
    plotOptions: {
      spline: {
        lineWidth: SIZE_MULTIPLIER,
      }
    },
    yAxis: {
      max: yAxisMax,
      title: {
        text: yAxisLabel
      }
    },
    xAxis: {
      labels: {
        formatter() {
          const d = new Date(START_DATE);
          d.setDate(d.getDate() + Number(this.value));
          return localiseDate(d)
        },
      },
      plotLines
    },
    tooltip: {
      formatter: function () {
        const date = new Date(START_DATE);
        date.setDate(date.getDate() + this.x);
        return formatPollutant(pollutant) + ' AQI on <b>' + localiseDate(date) +
          '</b> was <b>' + this.y + '</b>';
      }
    },
    series
  });

const loadFile = async (fileName: string) => await (await fetch(`/assets/delhi-aqi-raw-data/${fileName}.csv`)).text();
const loadAllData = async () => Promise.all(DATA_FILES.map(n => loadFile(n).then(csv => parse(csv, {
  cast: true,
  trim: true,
  // cast_date: true,
  columns: true
}))));

@Component({
  selector: 'app-delhi-aqi',
  templateUrl: './delhi-aqi.component.html',
  styleUrls: ['./delhi-aqi.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DelhiAqiComponent implements OnInit {
  readonly Highcharts: typeof Highcharts = Highcharts;
  readonly stationNames = DATA_FILES;
  readonly pollutants = POLLUTANTS;
  aqiPollutant: AqiPollutant = DEFAULT_AQI_POLLUTANT;
  data: { [date: string]: AqiSummary }[];
  dates: string[];
  years: number[];

  chart: Highcharts.Chart;
  allChartsConfig = [];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.aqiPollutant = POLLUTANTS.includes(queryParams['pollutant']) ? queryParams['pollutant'] : DEFAULT_AQI_POLLUTANT;
      this.resetInit();
    })
  }

  selectPollutant(pollutant: AqiPollutant): void {
    this.router.navigate([], {queryParams: {pollutant}});
  }

  async resetInit(): Promise<void> {
    const allData: any[][] = await loadAllData();
    this.data = allData.map(dataSet => dataSet.reduce((r, item) => {
      r[new Date(item.date).toISOString().split('T')[0]] = item;
      return r;
    }, {}));
    this.dates = [...new Set(this.data.flatMap(dataSet => Object.keys(dataSet)))].sort().reverse();
    this.years = [...new Set(this.dates.map(date => date.split('-')[0]))].map(n => Number(n));
    const aggregate = this.dates.reduce((r, date) => {
      let aqiDataCount = 0;
      let aqiSum = 0;

      r[date] = this.data.reduce((rr, dataSet) => {
        if (dataSet[date]?.[this.aqiPollutant] && typeof dataSet[date][this.aqiPollutant] === 'number') {
          aqiDataCount++;
          aqiSum += dataSet[date][this.aqiPollutant];
        }
        rr.date = date;
        return rr;
      }, {} as AqiSummary);

      r[date][this.aqiPollutant] = aqiSum ? Math.round(aqiSum / aqiDataCount) : aqiSum;

      return r;
    }, {});

    this.data = [aggregate];

    const diwaliDates = [
      '2014-10-23', '2015-11-11', '2016-10-30', '2017-10-19', '2018-11-07', '2019-10-27', '2020-11-14', '2021-11-04'
    ];

    this.allChartsConfig = ([2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014] || this.years).map((year, i) => {
      const countingDay = new Date(START_DATE);
      const seriesData = [];
      let xAxisDiwaliPlotLines;

      let xAxisIndex = 0;
      while (countingDay.getFullYear() === LEAP_YEAR/* && countingDay.getMonth() < 12*/) {
        const isoMonthDay = countingDay.toISOString().split('T')[0].split('-').splice(1);
        const currentYearDateKey = `${year}-${isoMonthDay.join('-')}`;

        if (diwaliDates.includes(currentYearDateKey)) {
          xAxisDiwaliPlotLines = XAxisPlotLinesConfig({
            value: xAxisIndex,
            label: {text: `Diwali ${localiseDate(countingDay)}`, x: -SIZE_MULTIPLIER * 20, style: {color: '#000'}},
            color: '#000'
          }) as any;
        }

        seriesData.push({
          id: this.aqiPollutant.toUpperCase(),
          // x: new Date(`1970-${countingDay.getDate()}/${countingDay.getMonth() + 1}`,
          y: aggregate[currentYearDateKey]?.[this.aqiPollutant] || null,
        });
        countingDay.setDate(countingDay.getDate() + 1);

        xAxisIndex++;
      }

      return [
        [
          {
            // turboThreshold: 366,
            name: `${year}`,
            data: seriesData,
            color: COLORS[i],
          }
        ], [xAxisDiwaliPlotLines], year
      ]
    }).map(([series, plotLines, year]) => generateChartOptions(
      series,
      plotLines,
      `${formatPollutant(this.aqiPollutant)} AQI`,
      600,
      this.aqiPollutant,
      year
    ));
  }
}
