import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ActivatedRoute, Router} from '@angular/router';
import {COLORS} from '../app.meta';
import {SIZE_MULTIPLIER} from '../utils/constants';
import {importantPeriods, yearlyTerrorismFatalities} from './terrorism-in-india.data';
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
    const killedSeries = {name: 'Civilians and Security Personal', data: [], color: COLORS[0]};
    const civiliansKilledSeries = {name: 'Civilians', data: [], color: COLORS[1]};
    const securityForcesKilledSeries = {name: 'Security Personal', data: [], color: COLORS[2]};
    const terroristsKilledSeries = {name: 'Terrorists', data: [], color: '#000'};
    const unspecifiedKilledSeries = {name: 'Unspecified', data: [], color: COLORS[4]};
    const totalSeries = {name: 'Total', data: [], color: COLORS[5]};

    const fatalitiesSeriesDict = {
      killedSeries,
      civiliansKilledSeries,
      securityForcesKilledSeries,
      terroristsKilledSeries,
      unspecifiedKilledSeries,
      // totalSeries
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

    const plotLines = importantPeriods.map(({year: value, name: text}) => verticalPlotLineConfig({value, text})) as any;

    this.allChartsConfig.push(generateChartOptions([killedSeries, terroristsKilledSeries], plotLines, `Fatalities`));
    this.allChartsConfig.push(generateChartOptions([
      civiliansKilledSeries, securityForcesKilledSeries
    ], plotLines, `Fatalities`));
    this.allChartsConfig.push(generateChartOptions(fatalitiesSeriesList.filter(s => s !== killedSeries), plotLines, `Fatalities`));
  }
}
