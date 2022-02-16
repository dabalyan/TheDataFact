import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ActivatedRoute, Router} from '@angular/router';
import {SIZE_MULTIPLIER} from '../utils/constants';
import {centralGovernments, roadNetworkOfIndia} from './india-roads-and-highways.data';
import {COLORS} from '../app.meta';
import {verticalPlotLineConfig} from '../utils/highcharts-helpers';

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
    },
    column: {
      borderWidth: 0,
      pointWidth: SIZE_MULTIPLIER * 2,
      dataLabels: {
        enabled: true
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
      return `Total <b>Length</b> in <b>${this.x}</b>: <b>${this.y.toLocaleString()}</b> km`;
    }
  },
  series
});

@Component({
  selector: 'app-roads-and-highways',
  templateUrl: './india-roads-and-highways.component.html',
  styleUrls: ['./india-roads-and-highways.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndiaRoadsAndHighwaysComponent implements OnInit {
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
    const expresswaysSeries = {name: 'Expressways', data: [], color: COLORS[0]};
    const expresswaysUnderConstructionSeries = {
      name: 'Under Construction',
      data: [],
      color: COLORS[0],
      dashStyle: 'shortdash'
    };
    const nationalHighwaysSeries = {name: 'National Highways', data: [], color: COLORS[1]};
    const stateHighwaysSeries = {name: 'State Highways', data: [], color: COLORS[2]};
    const ruralRoadsSeries = {name: 'Rural Roads', data: [], color: COLORS[4]};
    const urbanRoadsSeries = {name: 'Urban Roads', data: [], color: COLORS[5]};
    const projectRoadsSeries = {name: 'Project Roads', data: [], color: COLORS[3]};
    const districtRoadsSeries = {name: 'Other/PWD/District Roads', data: [], color: COLORS[6]};
    const totalSeries = {name: 'Total', data: [], color: COLORS[0]};
    const allSeriesDict = {
      expresswaysSeries,
      expresswaysUnderConstructionSeries,
      nationalHighwaysSeries,
      stateHighwaysSeries,
      urbanRoadsSeries,
      ruralRoadsSeries,
      projectRoadsSeries,
      districtRoadsSeries,
      totalSeries
    };
    const allSeriesList = Object.values(allSeriesDict);
    const allSeriesNames = Object.keys(allSeriesDict);

    roadNetworkOfIndia.forEach((yearlySummary, i) => {
      allSeriesNames.forEach(seriesName => {
        const dataKey = seriesName.replace('Series', '');
        if (yearlySummary[dataKey]) {
          allSeriesDict[seriesName].data.push({
            x: yearlySummary.year,
            y: yearlySummary[dataKey]
          })
        }
      })
    });

    const plotLines = (add2001 = false) => (add2001 ? [
      {
        year: 2001,
        government: 'Atal Era'
      }
    ] : []).concat(centralGovernments)
           .map(gov => verticalPlotLineConfig({
             value: gov.year,
             text: gov.government,
             x: -2,
             color: '#a3a3a3',
             textColor: '#a3a3a3'
           })) as any;

    this.allChartsConfig = allSeriesList
      .filter(s => s !== expresswaysUnderConstructionSeries)
      .map(series => generateChartOptions(
        [
          series,
          ...(series === expresswaysSeries ? [expresswaysUnderConstructionSeries] : [])
        ],
        plotLines(series === expresswaysUnderConstructionSeries), `Length (KM)`));
  }
}
