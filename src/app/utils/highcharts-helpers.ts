import * as Highcharts from 'highcharts';
import indiaMap from '@highcharts/map-collection/countries/in/custom/in-all-disputed.geo.json';
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
      borderWidth: 1,
      pointWidth: SIZE_MULTIPLIER * 4
    }
  },
  yAxis: {
    gridZIndex: 0,
    gridLineWidth: SIZE_MULTIPLIER,
    labels: {
      style: {
        fontSize: SIZE_MULTIPLIER * 16 + 'px',
        fontWeight: '400',
      },
    },
    opposite: true,
    title: {
      style: {
        fontSize: SIZE_MULTIPLIER * 16 + 'px',
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
        fontSize: SIZE_MULTIPLIER * 16 + 'px',
        fontWeight: '400',
        color: '#000'
      },
    }
  },
  tooltip: {
    hideDelay: 0,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    // borderColor: '#000',
    borderRadius: 8,
  },
  legend: {
    layout: 'horizontal',
    verticalAlign: 'bottom',
    itemStyle: {
      color: '#000',
      fontSize: SIZE_MULTIPLIER * 16 + 'px',
      fontWeight: '400',
    },
  }
});

const defaultMapConfig = (): Highcharts.Options => ({
  title: null,
  credits: {enabled: false},
  tooltip: {
    hideDelay: 0,
    backgroundColor: 'rgba(255, 255, 255, .95)',
    borderColor: '#000',
    borderRadius: 8
  },
  chart: {
    height: '90%',
    animation: false,
    map: indiaMap,
    borderWidth: 0,
    margin: 0,
    marginBottom: 50,
    spacing: [0, 0, 0, 0],
    backgroundColor: 'transparent',
    style: {
      fontFamily: 'monospace',
    },
  },
  mapNavigation: {
    enabled: false,
    enableButtons: true,
    enableTouchZoom: true,
    buttonOptions: {
      alignTo: 'spacingBox',
    },
  },
  legend: {
    enabled: true
  },
  colors: ['#f5fffa'],
  colorAxis: {
    stops: [
      [0, '#000000'],
      [.2, '#181818'],
      [1, '#ffffff']
    ],
  },
});

export const GenerateChartOptions = (config: Highcharts.Options): Highcharts.Options =>
  mergeDeep(defaultChartConfig(), config);

export const GenerateMapOptions = (config: Highcharts.Options): Highcharts.Options =>
  mergeDeep(defaultMapConfig(), config);
