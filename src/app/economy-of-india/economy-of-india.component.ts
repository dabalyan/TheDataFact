import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ActivatedRoute, Router} from '@angular/router';
import {COLORS} from '../app.meta';
import {GenerateChartOptions, XAxisPlotLinesConfig} from '../utils/highcharts-helpers';
import {dataPropertyDescription, economicData, importantPeriods} from './economy-of-india.data';

const generateChartOptions = (series, plotLines, yAxisLabel, title?): Highcharts.Options =>
  GenerateChartOptions({
    title: {
      text: title
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
      shared: true,
      useHTML: true,
      formatter: function () {
        // console.log(this);
        const formatter = that => `<tr><td>${that.series.name}:</td> <td><b>${that.y.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}</b> ${that.series.yAxis.axisTitle.textStr}</td></tr>`
        return `In <b>${this.x}</b><br><br> <table>` + (this.points || [this]).map(formatter).join('') + '</table>';
      }
    },
    series
  });

@Component({
  selector: 'app-economy-of-india',
  templateUrl: './economy-of-india.component.html',
  styleUrls: ['./economy-of-india.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EconomyOfIndiaComponent implements OnInit {
  readonly Highcharts: typeof Highcharts = Highcharts;
  allCharts: Highcharts.Chart[] = [];
  allChartsConfig = [];

  countries = ['India', 'China', 'USA'];
  countriesVisibility = {India: true, China: true, USA: false};

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.resetInit();
    })
  }

  async resetInit(): Promise<void> {
    const allSeriesListIndia = Object.entries(dataPropertyDescription).map(([dataProperty, description], i) => {
      return {
        name: 'India',
        data: economicData.IND.map(d => ({x: d.year, y: d[dataProperty]})),
        color: COLORS[3] || '#000',
        description,
        zoneAxis: 'x',
        zones: [
          {
            value: 2021
          }, {
            dashStyle: 'shortdash'
          }
        ],
        visible: this.countriesVisibility.India
      }
    });

    const allSeriesListChina = Object.entries(dataPropertyDescription).map(([dataProperty, description], i) => {
      return {
        name: 'China',
        data: economicData.CHN.map(d => ({x: d.year, y: d[dataProperty]})),
        color: COLORS[0] || COLORS[i % COLORS.length],
        description,
        zoneAxis: 'x',
        zones: [
          {
            value: 2021
          }, {
            dashStyle: 'shortdash'
          }
        ],
        visible: this.countriesVisibility.China
      }
    });

    const allSeriesLisUsa = Object.entries(dataPropertyDescription).map(([dataProperty, description], i) => {
      return {
        name: 'USA',
        data: economicData.USA.map(d => ({x: d.year, y: d[dataProperty]})),
        color: COLORS[4] || COLORS[Math.abs(COLORS.length - i - 1) % COLORS.length],
        description,
        zoneAxis: 'x',
        zones: [
          {
            value: 2021
          }, {
            dashStyle: 'shortdash'
          }
        ],
        visible: this.countriesVisibility.USA
      }
    });

    const plotLines = importantPeriods.map(
      ({year: value, name: text}) => XAxisPlotLinesConfig({
        value, label: {text}
      })
    ) as any;

    this.allChartsConfig = allSeriesListIndia
      .map((series, i) => generateChartOptions([
        series, allSeriesListChina[i], allSeriesLisUsa[i]
      ], plotLines, series.description.yAxisLabel, series.description.name));
  }

  toggleSeries(name: string, i: number): void {
    this.allCharts.forEach(chart => this.countriesVisibility[name] ? chart.series[i].hide() : chart.series[i].show());
    this.countriesVisibility[name] = !this.countriesVisibility[name];
  }
}

