import * as Highcharts from 'highcharts';
import {SIZE_MULTIPLIER} from './constants';
import {mergeDeep} from './functions';

const defaultXAxisPlotConfig = (): Highcharts.XAxisPlotLinesOptions => ({
  color: '#a3a3a3',
  width: SIZE_MULTIPLIER,
  label: {
    align: 'left',
    x: SIZE_MULTIPLIER * 2,
    y: SIZE_MULTIPLIER * 14,
    useHTML: true,
    style: {
      color: '#a3a3a3',
      fontSize: SIZE_MULTIPLIER * 13 + 'px',
      writingMode: 'vertical-lr',
      transform: '',
      fontWeight: 'bold'
    }
  }
});

export const XAxisPlotLinesConfig = (config: Highcharts.XAxisPlotLinesOptions): Highcharts.XAxisPlotLinesOptions =>
  mergeDeep(defaultXAxisPlotConfig(), config);

const defaultChartConfig = (): Highcharts.Options => ({
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
    },
    column: {
      borderWidth: 0,
      pointWidth: SIZE_MULTIPLIER * 4,
      opacity: .9,
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
      style: {
        fontSize: SIZE_MULTIPLIER * 14 + 'px',
        fontWeight: '400',
      },
    }
  },
  xAxis: {
    gridZIndex: 1,
    showFirstLabel: true,
    showLastLabel: true,
    labels: {
      style: {
        fontSize: SIZE_MULTIPLIER * 13 + 'px',
        fontWeight: '400',
      },
    }
  },
  legend: {
    layout: 'horizontal',
    verticalAlign: 'bottom',
    itemStyle: {
      fontSize: SIZE_MULTIPLIER * 14 + 'px',
      fontWeight: '400',
    },
  }
});

export const GenerateChartOptions = (config: Highcharts.Options): Highcharts.Options =>
  mergeDeep(defaultChartConfig(), config);
