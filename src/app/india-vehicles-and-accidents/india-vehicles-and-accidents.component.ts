import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ActivatedRoute, Router} from '@angular/router';
import {COLORS} from '../app.meta';
import {registeredVehicles, roadAccidents} from './india-vehicles-and-accidents.data';
import {GenerateChartOptions} from '../utils/highcharts-helpers';

const generateChartOptions = (series, plotLines, yAxisLabel, vehicles?: boolean): Highcharts.Options =>
  GenerateChartOptions({
    yAxis: {
      title: {
        text: yAxisLabel
      }
    },
    xAxis: {
      plotLines
    },
    tooltip: {
      formatter: function () {
        return `Total <b>${this.series.name}</b>${vehicles ? ' registered' : ''} in <b>${this.x}</b>: <b>${this.y.toLocaleString()}</b>`;
      }
    },
    series
  });

@Component({
  selector: 'app-india-vehicles-and-accidents',
  templateUrl: './india-vehicles-and-accidents.component.html',
  styleUrls: ['./india-vehicles-and-accidents.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndiaVehiclesAndAccidentsComponent implements OnInit {
  readonly Highcharts: typeof Highcharts = Highcharts;
  chart: Highcharts.Chart;
  allChartsConfig = [];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.resetInit();
    })
  }

  async resetInit(): Promise<void> {
    const twoWheelersSeries = {name: 'Two Wheelers', data: [], color: COLORS[0]};
    const carsSeries = {name: 'Cars', data: [], color: COLORS[3]};
    const busesSeries = {name: 'Buses', data: [], color: COLORS[2]};
    const commercialSeries = {name: 'Commercial', data: [], color: COLORS[1]};
    const othersSeries = {name: 'Others', data: [], color: COLORS[4]};

    const accidentsSeries = {name: 'Accidents', data: [], color: COLORS[4]};
    const fatalAccidentsSeries = {name: 'Fatal Accidents', data: [], color: COLORS[6]};
    const deathsSeries = {name: 'Deaths', data: [], color: COLORS[5]};
    const injuredSeries = {name: 'Injured', data: [], color: COLORS[3]};

    const vehiclesSeriesDict = {
      twoWheelersSeries,
      carsSeries,
      busesSeries,
      commercialSeries,
      othersSeries
    };
    const vehiclesSeriesList = Object.values(vehiclesSeriesDict);
    const vehiclesSeriesNames = Object.keys(vehiclesSeriesDict);

    const accidentsSeriesDict = {
      accidentsSeries,
      fatalAccidentsSeries,
      deathsSeries,
      injuredSeries
    };
    const accidentsSeriesList = Object.values(accidentsSeriesDict);
    const accidentsSeriesNames = Object.keys(accidentsSeriesDict);

    registeredVehicles.forEach((yearlySummary, i) => {
      vehiclesSeriesNames.forEach(seriesName => {
        const dataKey = seriesName.replace('Series', '');
        if (yearlySummary[dataKey]) {
          vehiclesSeriesDict[seriesName].data.push({
            x: yearlySummary.year,
            y: yearlySummary[dataKey]
          })
        }
      })
    });

    roadAccidents.forEach((yearlySummary, i) => {
      accidentsSeriesNames.forEach(seriesName => {
        const dataKey = seriesName.replace('Series', '');
        if (yearlySummary[dataKey]) {
          accidentsSeriesDict[seriesName].data.push({
            x: yearlySummary.year,
            y: yearlySummary[dataKey]
          })
        }
      })
    });

    this.allChartsConfig = [
      generateChartOptions(vehiclesSeriesList, null, `Registrations/Year`, true),
      generateChartOptions(accidentsSeriesList, null, `Total`)
    ];
  }
}
