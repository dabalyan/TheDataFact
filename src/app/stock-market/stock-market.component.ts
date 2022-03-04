import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ActivatedRoute, Router} from '@angular/router';
import {GenerateChartOptions} from '../utils/highcharts-helpers';
import {sortByIndexAndLengthCompareFn, sortCompareFnByKey} from '../utils/functions';

const formatDate = (timestamp, month = 'short', year = 'numeric') => new Date(timestamp).toLocaleString(undefined, {
  year: year as any,
  month: month as any,
  day: 'numeric'
})

const generateChartOptions = (series, plotLines, yAxisLabel): Highcharts.Options =>
  GenerateChartOptions({
    chart: {
      marginRight: 90,
      zoomType: 'x'
    },
    plotOptions: {
      series: {
        turboThreshold: 2000,
        dataLabels: {
          enabled: false,
          crop: false,
          overflow: 'none' as any,
          align: 'left',
          verticalAlign: 'middle',
          formatter: function () {
            return `<span style="color:${(this as any).series.color}">${(this as any).series.name}</span>`;
          }
        }
      },
    },
    yAxis: {
      title: {
        text: yAxisLabel
      },
      labels: {
        x: 30
      },
      opposite: true,
      plotLines: [{value: 0, color: 'red', dashStyle: 'Dash'}]
    },
    xAxis: {
      plotLines,
      labels: {
        formatter: function () {
          return formatDate(this.value, '2-digit', '2-digit');
        }
      }
    },
    tooltip: {
      shared: true,
      useHTML: true,
      formatter: function () {
        const formatter = that => `<tr><td>${that.series.name}</td> <td><b>${that.y.toLocaleString()}</b></td></tr>`
        return `<b>${formatDate(this.x)}</b><br><br> <table>` +
          (this.points || [this]).sort(sortCompareFnByKey('y', true)).map(formatter).join('') +
          '</table>';
      }
    },
    series
  });

@Component({
  selector: 'app-stock-market',
  templateUrl: './stock-market.component.html',
  styleUrls: ['./stock-market.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StockMarketComponent implements OnInit {
  readonly Highcharts: typeof Highcharts = Highcharts;
  chart: Highcharts.Chart;
  chartConfig;

  readonly fromDate = 946684800; // 2000-01-01 UNIX timestamp
  readonly toDate: number;
  apiToken: string;
  selectedSymbols: string[] = [];

  apiTokenInput: string;

  allTickers: { type: string; name: string; symbol: string }[];
  searchResults: { type: string; name: string; symbol: string }[];
  showSearchResults = false;

  timeSpanLabels = {D: 'Daily', W: 'Weekly', M: 'Monthly'};
  timeSpans = Object.keys(this.timeSpanLabels);
  timeSpan: 'D' | 'W' | 'M';

  pricingLabels = {c: 'On Close', o: 'On Open', h: 'Highest', l: 'Lowest'};
  pricingKeys = Object.keys(this.pricingLabels);
  pricingKey: 'c' | 'o' | 'h' | 'l';

  fromDateTimestamp: number;
  fromYear: number;
  fromYearOptions = Array(new Date().getFullYear() - 2000 + 1).fill(0).map((a, i) => i + 2000);
  fromMonth: number;
  fromMonthOptions = Array(12).fill(0).map((a, i) => i + 1);

  constructor(private router: Router, private route: ActivatedRoute) {
    const todayDate = new Date();
    todayDate.setUTCHours(0, 0, 0, 0);
    const firstDayOfNextWeek = new Date(todayDate.setDate(todayDate.getDate() - todayDate.getDay() + 7));
    this.toDate = Math.floor(firstDayOfNextWeek.getTime() / 1000);
  }

  async ngOnInit(): Promise<void> {
    this.chartConfig = generateChartOptions([], null, '');

    this.route.queryParams.subscribe(() => {
      this.initReset();
    });
    this.allTickers = await (await fetch('assets/stock-market/symbols.json')).json();
  }

  initReset(): void {
    const queryParams = this.route.snapshot.queryParams;

    const prevSelectedYear = this.fromYear;
    this.fromYear = Number(queryParams['from']);
    if (!this.fromYearOptions.includes(this.fromYear)) {
      this.fromYear = 2000;
    }

    const prevSelectedMonth = this.fromMonth;
    this.fromMonth = Number(queryParams['month']);
    if (!(this.fromMonth >= 1 && this.fromMonth <= 12)) {
      this.fromMonth = 1;
    }


    this.fromDateTimestamp = Math.floor(new Date(
      [this.fromYear, String(this.fromMonth).padStart(2, '0'), '01T00:00:00Z'].join('-')
    ).getTime() / 1000);

    const previousTimeSpan = this.timeSpan;
    this.timeSpan = queryParams['ts'];
    if (!this.timeSpans.includes(this.timeSpan)) {
      this.timeSpan = 'M';
    }

    const previousPricingKey = this.pricingKey;
    this.pricingKey = queryParams['pricing'];
    if (!this.pricingKeys.includes(this.pricingKey)) {
      this.pricingKey = 'c';
    }

    this.apiToken = localStorage.getItem('finnhubApiKey');
    if (!this.apiToken) {
      return;
    }

    const resetChart = prevSelectedYear && prevSelectedYear !== this.fromYear
      || prevSelectedMonth && prevSelectedMonth !== this.fromMonth
      || previousTimeSpan && previousTimeSpan !== this.timeSpan
      || previousPricingKey && previousPricingKey !== this.pricingKey;

    const yAxisTitle = `% Growth since ${
      new Date('0-' + this.fromMonth).toLocaleString(undefined, {month: 'short'})
    } ${this.fromYear}`;
    this.chartConfig.yAxis.title.text = yAxisTitle;
    this.chart?.yAxis[0].setTitle({text: yAxisTitle});

    const querySymbols = queryParams['symbols']?.split(',').map(s => s.toUpperCase().trim()) as string[];

    this.selectedSymbols.forEach(symbol => {
      if (!querySymbols.includes(symbol)) {
        this.removeSymbol(symbol);
      }
    });

    querySymbols?.forEach(symbol => {
      this.addSymbol(symbol, resetChart);
    });
  }

  async addSymbol(symbol: string, resetChart = false): Promise<void> {
    symbol = symbol.toUpperCase();
    if (!symbol || (!resetChart && this.selectedSymbols.includes(symbol))) {
      return;
    }

    const allData: { c: number[], o: number[], h: number[], l: number[], t: number[] } =
      await this.memoizeFetchData(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${this.timeSpan}&from=${this.fromDate}&to=${this.toDate}&token=`, this.apiToken);

    if (!allData?.t?.length) {
      // alert(`No data found for ${symbol}`);
      return;
    }

    if (!resetChart) {
      this.selectedSymbols.push(symbol);
    }
    const existingSeries = this.chart.series.find(({name}) => name === symbol);

    const startIndex = allData.t.findIndex(t => t >= this.fromDateTimestamp);
    const basePrice = allData[this.pricingKey][startIndex];
    const seriesData = allData[this.pricingKey].slice(startIndex).map((value, i) => ({
      x: allData.t[i + startIndex] * 1000,
      y: (value - basePrice) * 100 / basePrice
    }));
    seriesData[seriesData.length - 1]['dataLabels'] = {enabled: true};
    seriesData[seriesData.length - 1]['marker'] = {enabled: true};

    if (existingSeries) {
      existingSeries.setData(seriesData, true, true);
    }
    else {
      this.chart.addSeries({
        type: 'spline',
        name: symbol,
        data: seriesData,
        marker: {symbol: 'circle'}
      });
    }
  }

  removeSymbol(symbol: string): void {
    symbol = symbol.toUpperCase();
    if (!symbol || !this.selectedSymbols.includes(symbol)) {
      return;
    }

    this.selectedSymbols.splice(this.selectedSymbols.indexOf(symbol), 1);
    this.chart.series.find(({name}) => name === symbol)?.remove();
  }

  async memoizeFetchData(url: string, token: string): Promise<any> {
    const cache = localStorage.getItem(url);
    if (cache) {
      return new Promise(r => r(JSON.parse(cache)));
    }
    return await (await fetch(url + token)).json().then(data => {
      const storageFifoList = JSON.parse(localStorage.getItem('fifoCacheKeys') || '[]') as string[];

      try {
        localStorage.setItem(url, JSON.stringify(data));
      } catch (e) {
        console.error(e);
        storageFifoList.splice(0, storageFifoList.length / 4).forEach(key => {
          localStorage.removeItem(key);
        });

        // try again after freeing some space
        localStorage.setItem(url, JSON.stringify(data));
      }

      storageFifoList.push(url);
      localStorage.setItem('fifoCacheKeys', JSON.stringify(storageFifoList));

      return data
    });
  }

  onSearchInput(query: string): void {
    query = query.toUpperCase().trim();
    if (!query) {
      this.searchResults = [];
      return;
    }

    const exactMatchesBySymbol = [];
    const exactMatchesByName = [];
    const partialMatchesBySymbol = [];
    const partialMatchesByName = [];

    this.allTickers.forEach(({name, symbol}, i) => {
      if (symbol === query) {
        exactMatchesBySymbol.push({symbol, name});
      }
      else if (symbol.includes(query)) {
        partialMatchesBySymbol.push({symbol, name});
      }

      if (name === query) {
        exactMatchesByName.push({symbol, name});
      }
      else if (name.includes(query)) {
        partialMatchesByName.push({symbol, name});
      }
    });

    this.searchResults = [
      ...exactMatchesBySymbol.slice(0, 10),
      ...exactMatchesByName.slice(0, 10),
      ...partialMatchesBySymbol.sort(sortByIndexAndLengthCompareFn('symbol', query)).slice(0, 10),
      ...partialMatchesByName.sort(sortByIndexAndLengthCompareFn('name', query)).slice(0, 100)
    ];
  }

  toggleSymbol(symbol: string, remove = false): void {
    const symbols = remove ? this.selectedSymbols.filter(s => s !== symbol) : [...this.selectedSymbols, symbol];

    this.navigate({symbols: symbols.join(',')});
  }

  selectFromYear(year: number): void {
    this.navigate({from: year});
  }

  selectFromMonth(month: number): void {
    this.navigate({month});
  }

  selectTimeSpan(span: number): void {
    this.navigate({ts: span});
  }

  selectPricing(key: number): void {
    this.navigate({pricing: key});
  }

  navigate(queryParams: Record<string, any>): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true
    })
  }

  saveApiToken(): void {
    this.apiToken = this.apiTokenInput
    localStorage.setItem('finnhubApiKey', this.apiToken);

    setTimeout(() => {
      this.initReset();
      this.chart.reflow();
    })
  }
}

