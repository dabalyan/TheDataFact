import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ActivatedRoute, Router} from '@angular/router';
import {centralGovernments, roadNetworkOfIndia} from './india-roads-and-highways.data';
import {COLORS} from '../app.meta';
import {GenerateChartOptions, XAxisPlotLinesConfig} from '../utils/highcharts-helpers';

const generateChartOptions = (series, plotLines, yAxisLabel, dashStyle?): Highcharts.Options =>
  GenerateChartOptions({
    plotOptions: {
      spline: {
        dashStyle,
      }
    },
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
           .map(gov => XAxisPlotLinesConfig({
             value: gov.year,
             label: {text: gov.government}
           })) as any;

    this.allChartsConfig = allSeriesList
      .filter(s => s !== expresswaysUnderConstructionSeries)
      .map(series => generateChartOptions(
        [
          series,
          ...(series === expresswaysSeries ? [expresswaysUnderConstructionSeries] : [])
        ],
        plotLines(series === expresswaysSeries), `Length (KM)`));
  }
}
