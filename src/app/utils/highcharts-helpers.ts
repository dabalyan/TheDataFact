import * as Highcharts from 'highcharts';
import {SIZE_MULTIPLIER} from './constants';

export const verticalPlotLineConfig = (config: { value: number, text: string, color?: string, x?: number}) => ({
  color: config.color || '#a3a3a3',
  width: SIZE_MULTIPLIER,
  value: config.value,
  label: {
    text: config.text,
    align: 'left',
    x: -SIZE_MULTIPLIER * (config.x || -2),
    y: SIZE_MULTIPLIER * 14,
    useHTML: true,
    style: {
      color: config.color || '#a3a3a3',
      fontSize: SIZE_MULTIPLIER * 13 + 'px',
      writingMode: 'vertical-lr',
      transform: '',
      fontWeight: 'bold'
    }
  }
} as Highcharts.XAxisPlotLinesOptions)
