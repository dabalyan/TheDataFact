import {AfterViewInit, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import {ActivatedRoute, Router} from '@angular/router';
import {COLORS} from '../app.meta';
import {GenerateChartOptions, GenerateMapOptions, XAxisPlotLinesConfig} from '../utils/highcharts-helpers';
import {
  importantPeriods,
  railwayElectrificationData,
  railwayElectrificationYearWiseData,
  stateWiseElectrification
} from './electrification-of-india.data';

const generateChartOptions = (series, plotLines, yAxisLabel, chartType?, tooltipLabel?): Highcharts.Options =>
  GenerateChartOptions({
    chart: {
      type: chartType
    },
    plotOptions: {
      series: {
        // stacking: chartType === 'bar' ? 'normal' : null
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
        // console.log(this);
        const formatter = that => `<tr><td>${tooltipLabel || that.series.name}:</td> <td><b>${that.y.toLocaleString()}</b> ${that.series.yAxis.axisTitle.textStr}</td></tr>`
        return `In <b>${this.x}</b><br><br> <table>` + (this.points || [this]).map(formatter).join('') + '</table>';
      },
      shared: true,
      useHTML: true
    },
    series
  });

const generateMapOptions = (series): Highcharts.Options =>
  GenerateMapOptions({
    series
  });

@Component({
  selector: 'app-electrification-of-india',
  templateUrl: './electrification-of-india.component.html',
  styleUrls: ['./electrification-of-india.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ElectrificationOfIndiaComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly Highcharts: typeof Highcharts = Highcharts;
  allCharts: Highcharts.Chart[] = [];
  allChartsConfig = [];

  allMaps: Highcharts.Chart[] = [];
  allMapsConfig = [];

  availableYears = [2001, 2011, 2016, 2019];
  visibleYear: number = this.availableYears[0];
  autoMapIntervalRef: number;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.resetInit();
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.selectMapSeries(this.availableYears[0]);

      this.autoMapIntervalRef = window.setInterval(() =>
          this.selectMapSeries(this.availableYears[(this.availableYears.indexOf(this.visibleYear) + 1) % this.availableYears.length], true),
        1200
      );
    });
  }

  async resetInit(): Promise<void> {
    const yearWiseElectrificationOfRailwaysSeries = {name: 'Electrification per Year', data: [], color: COLORS[3]};
    const yearWiseTotalElectrificationOfRailwaysSeries = {name: 'Total Electrification', data: [], color: COLORS[0]};

    railwayElectrificationData.forEach((yearlySummary, i) => {
      yearWiseTotalElectrificationOfRailwaysSeries.data.push({
        x: yearlySummary.to,
        y: yearlySummary.totalElectrification
      });
    });

    railwayElectrificationYearWiseData.forEach((yearlySummary, i) => {
      yearWiseElectrificationOfRailwaysSeries.data.push({
        x: yearlySummary.to,
        y: yearlySummary.electrification
      });
    });

    const plotLines = importantPeriods.map(
      ({year: value, name: text}) => XAxisPlotLinesConfig({
        value, label: {text}
      })
    ) as any;

    this.allChartsConfig.push(generateChartOptions([yearWiseElectrificationOfRailwaysSeries], plotLines, 'Route KMs', 'column', 'Electrification'));
    this.allChartsConfig.push(generateChartOptions([yearWiseTotalElectrificationOfRailwaysSeries], plotLines, 'Route KMs'));

    const mapSeriesOptions = (name = null): Highcharts.SeriesOptionsType & { data: any[] } => ({
      name: name,
      type: 'map',
      data: [],
      states: {
        hover: {
          // color: null,
          // brightness: 0,
          borderColor: COLORS[3],
        },
      },
      // nullColor: COLORS[7],
      // borderColor: COLORS[3],
      dataLabels: {
        enabled: true,
        format: '{point.value}%'
      },
      showInLegend: false
    })

    const allVillageElectrificationSeriesDict: { [year: string]: Highcharts.SeriesOptionsType & { data: any[] } } = Object.fromEntries(
      this.availableYears.map(year => [year, mapSeriesOptions(year)])
    );

    stateWiseElectrification.forEach(stateSummary => {
      const hcKey = stateSummary['hc-key'] || stateSummary.name.toLowerCase();
      this.availableYears.forEach(year => {
        allVillageElectrificationSeriesDict[year].data.push([hcKey, stateSummary[year]]);
      });
    });

    this.allMapsConfig.push(generateMapOptions(Object.values(allVillageElectrificationSeriesDict)));
  }

  selectMapSeries(selectedYear: number, auto = false): void {
    if (!auto) {
      clearInterval(this.autoMapIntervalRef);
    }
    const map = this.allMaps[0];
    let selectedSeries;
    this.availableYears.forEach((year, i) => {
      const series = map.series[i];
      if (year === selectedYear) {
        selectedSeries = series;
      }
      else {
        series.hide();
      }
    });
    selectedSeries.show();
    this.visibleYear = selectedYear;
    map.reflow();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoMapIntervalRef);
  }
}
