import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ActivatedRoute, Router} from '@angular/router';
import {COLORS} from '../app.meta';
import {registeredVehicles, roadAccidents} from './india-vehicles-and-accidents.data';
import {SIZE_MULTIPLIER} from '../utils/constants';

const generateChartOptions = (series, plotLines, yAxisLabel, dashStyle?): Highcharts.Options => ({
  title: null,
  credits: {enabled: false},
  chart: {
    type: 'spline',
    animation: false,
    borderWidth: 0,
    backgroundColor: 'transparent',
    style: {
      fontFamily: 'monospace',
    },
  },
  mapNavigation: {
    enabled: false,
    buttonOptions: {
      alignTo: 'spacingBox',
    },
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5,
      marker: {enabled: false},
    },
    spline: {
      marker: {enabled: false},
      lineWidth: SIZE_MULTIPLIER * 2,
      dashStyle,
      dataLabels: {
        // enabled: true
      }
    },
    column: {
      borderWidth: 0,
      pointWidth: SIZE_MULTIPLIER * 4,
      opacity: .9,
      dataLabels: {
        // enabled: true
      }
    }
  },
  yAxis: {
    gridZIndex: 0,
    gridLineWidth: SIZE_MULTIPLIER,
    labels: {
      style: {
        fontSize: SIZE_MULTIPLIER * 14 + 'px',
        fontWeight: '400',
      },
    },
    opposite: true,
    title: {
      text: yAxisLabel,
      style: {
        fontSize: SIZE_MULTIPLIER * 14 + 'px',
        fontWeight: '400',
      },
    }
  },
  xAxis: {
    // type: 'datetime',
    gridZIndex: 1,
    // showFirstLabel: true,
    showLastLabel: true,
    // tickInterval: 2,
    labels: {
      // tslint:disable-next-line:only-arrow-functions typedef
      /*formatter() {
        // return localiseDate(this.value as any);
        const d = new Date(START_DATE);
        d.setDate(d.getDate() + Number(this.value));
        return localiseDate(d)
      },*/
      style: {
        fontSize: SIZE_MULTIPLIER * 13 + 'px',
        fontWeight: '400',
      },
    },
    plotLines
  },
  legend: {
    layout: 'horizontal',
    verticalAlign: 'bottom',
    itemStyle: {
      fontSize: SIZE_MULTIPLIER * 14 + 'px',
      fontWeight: '400',
    },
  },
  tooltip: {
    formatter: function () {
      // console.log(this);
      return `Total <b>${this.series.name}</b> in <b>${this.x}</b>: <b>${this.y.toLocaleString()}</b>`;
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
      generateChartOptions(vehiclesSeriesList, null, `Total`),
      generateChartOptions(accidentsSeriesList, null, `Total`)
    ];
  }
}
