import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ActivatedRoute, Router} from '@angular/router';
import {COLORS} from '../app.meta';
import {importantPeriods, yearlyTerrorismFatalities} from './terrorism-in-india.data';
import {GenerateChartOptions, XAxisPlotLinesConfig} from '../utils/highcharts-helpers';
import {SIZE_MULTIPLIER} from '../utils/constants';

const generateChartOptions = (series, plotLines, yAxisLabel): Highcharts.Options =>
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
      shared: true,
      useHTML: true,
      formatter: function () {
        const formatter = that => `<tr><td>${that.series.name}</td> <td><b>${that.y.toLocaleString()}</b></td></tr>`
        return `Fatalities in <b>${this.x}</b><br><br> <table>` + (this.points || [this]).map(formatter).join('') + '</table>';
      }
    },
    series
  });

@Component({
  selector: 'app-terrorism-in-india',
  templateUrl: './terrorism-in-india.component.html',
  styleUrls: ['./terrorism-in-india.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TerrorismInIndiaComponent implements OnInit {
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
    const civiliansAndSecurityForcesKilled = {name: 'Civilians and Security Personal', data: [], color: COLORS[0]};
    const civiliansKilledSeries = {name: 'Civilians', data: [], color: COLORS[1]};
    const securityForcesKilledSeries = {name: 'Security Personal', data: [], color: COLORS[2]};
    const terroristsKilledSeries = {name: 'Terrorists', data: [], color: '#000'};
    const unspecifiedKilledSeries = {name: 'Unspecified', data: [], color: COLORS[4]};

    const fatalitiesSeriesDict = {
      civiliansAndSecurityForcesKilled,
      civiliansKilledSeries,
      securityForcesKilledSeries,
      terroristsKilledSeries,
      unspecifiedKilledSeries
    };
    const fatalitiesSeriesList = Object.values(fatalitiesSeriesDict);
    const fatalitiesSeriesNames = Object.keys(fatalitiesSeriesDict);

    yearlyTerrorismFatalities.forEach((yearlySummary, i) => {
      fatalitiesSeriesNames.forEach(seriesName => {
        const dataKey = seriesName.replace('Series', '');
        if (yearlySummary[dataKey]) {
          fatalitiesSeriesDict[seriesName].data.push({
            x: yearlySummary.year,
            y: yearlySummary[dataKey]
          })
        }
      })
    });

    const plotLines = importantPeriods.map(
      ({year: value, name: text}) => XAxisPlotLinesConfig({
        value, label: {text}
      })
    ) as any;

    this.allChartsConfig.push(generateChartOptions([civiliansAndSecurityForcesKilled, terroristsKilledSeries], plotLines, `Fatalities`));
    this.allChartsConfig.push(generateChartOptions([
      civiliansKilledSeries, securityForcesKilledSeries
    ], plotLines, `Fatalities`));
    this.allChartsConfig.push(generateChartOptions(fatalitiesSeriesList.filter(s => s !== civiliansAndSecurityForcesKilled), plotLines, `Fatalities`));
  }
}
