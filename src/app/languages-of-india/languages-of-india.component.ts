import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ActivatedRoute, Router} from '@angular/router';
import {COLORS} from '../app.meta';
import {GenerateChartOptions} from '../utils/highcharts-helpers';
import {speakersByLanguage} from './languages-of-india.data';

function chartLabelToggleFix() {
  setTimeout(() => {
    // @ts-ignore
    this.series.forEach(({points}) => {
      points.forEach((el: any) => {
        if (el.dataLabel.div.scrollWidth - 5 > el.graphic.element.getBoundingClientRect().width) {
          el.dataLabel.div.style.visibility = 'hidden';
        }
        else {
          el.dataLabel.div.style.visibility = null;
        }
      });
    });
  }, 500);
}

const generateChartOptions = (series, categories): Highcharts.Options =>
  GenerateChartOptions({
    chart: {
      type: 'bar',
      events: {
        redraw: series.length > 1 && chartLabelToggleFix,
        render: series.length > 1 && chartLabelToggleFix
      }
    },
    xAxis: {
      type: 'category',
      categories
    },
    yAxis: {
      min: 0,
      opposite: false,
      title: {text: null}
    },
    legend: {
      reversed: true,
      verticalAlign: 'top',
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      },
      bar: {
        pointWidth: 20,
        dataLabels: {
          enabled: true,
          useHTML: true,
          inside: series.length > 1,
          style: {
            fontSize: '16',
            fontWeight: '400'
          },
          formatter() {
            const point = this.point.options;
            return `<span ${series.length > 1 ? '' : 'style="color: black"'}>${point['pc'].toFixed(2)}%</span>`
          },
        }
      }
    },
    tooltip: {
      shared: true,
      useHTML: true,
      formatter(p) {
        const createTableRow = (point, bold = false) => `<tr style="${bold ? 'font-weight: bold' : ''}">
            <td>${point.name}</td><td>${point.y.toLocaleString()}</td>
            <td>${point['pc'].toFixed(2)}%</td>
          </tr>`;
        const totalPoint = this.points.length > 1 ? this.points.reduce((r, {point: {y, pc}}: any) => {
          r.pc += pc;
          r.y += y;
          return r;
        }, {y: 0, pc: 0, name: 'Total Speakers'}) : null;

        return `<h2 style="color: ${this.color}">${this.x}</h2>
                <table>
                    ${this.points.map(({point: options}) => createTableRow(options)).join('\n')}
                    ${totalPoint ? createTableRow(totalPoint, true) : ''}
                </table>`;
      },
    },
    series
  });

@Component({
  selector: 'app-languages-of-india',
  templateUrl: './languages-of-india.component.html',
  styleUrls: ['./languages-of-india.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LanguagesOfIndiaComponent implements OnInit {
  readonly Highcharts: typeof Highcharts = Highcharts;
  allChartsConfig = [];
  combinedStackedChartsConfig;

  data = speakersByLanguage;
  colors = COLORS;

  readonly totalPopulation2011 = 1_210_193_422;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.resetInit();
    })
  }

  async resetInit(): Promise<void> {
    const dataSorting = {enabled: false};
    const totalSpeakersSeries = {name: 'Total Speakers', data: [], color: COLORS[0], dataSorting};
    const firstLangSpeakersSeries = {name: 'First Language Speakers', data: [], color: COLORS[1], dataSorting};
    const secondLangSpeakersSeries = {name: 'Second Language Speakers', data: [], color: COLORS[2], dataSorting};
    const thirdLangSpeakersSeries = {name: 'Third Language Speakers', data: [], color: COLORS[3], dataSorting};

    speakersByLanguage.forEach((langData, i) => {
      totalSpeakersSeries.data.push({
        name: totalSpeakersSeries.name,
        y: langData.total,
        pc: langData.totalPc,
        lang: langData.lang
      });

      firstLangSpeakersSeries.data.push({
        name: firstLangSpeakersSeries.name,
        y: langData.firstLang,
        pc: langData.firstLangPc,
        lang: langData.lang
      });

      const secondLangPc = (langData.secondLang * 100 / this.totalPopulation2011);
      secondLangSpeakersSeries.data.push({
        name: secondLangSpeakersSeries.name,
        y: langData.secondLang,
        pc: secondLangPc,
        lang: langData.lang
      });

      const thirdLangPc = (langData.thirdLang * 100 / this.totalPopulation2011);
      thirdLangSpeakersSeries.data.push({
        name: thirdLangSpeakersSeries.name,
        y: langData.thirdLang,
        pc: thirdLangPc,
        lang: langData.lang
      });
    });

    this.combinedStackedChartsConfig = generateChartOptions([
      firstLangSpeakersSeries,
      secondLangSpeakersSeries,
      thirdLangSpeakersSeries
    ], speakersByLanguage.map(({lang}) => lang));

    [
      totalSpeakersSeries,
      firstLangSpeakersSeries,
      secondLangSpeakersSeries,
      thirdLangSpeakersSeries
    ].forEach(dataSeries => {
      dataSeries = {...dataSeries};
      dataSeries.data = [...dataSeries.data].sort((a, b) => b.y - a.y);
      this.allChartsConfig.push(
        generateChartOptions(
          [dataSeries],
          dataSeries.data.map(({lang}) => lang)
        )
      );
    });
  }
}

