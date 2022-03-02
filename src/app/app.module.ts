import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DelhiAqiComponent} from './delhi-aqi/delhi-aqi.component';
import {
  WikipediaSourcesReliabilityIndexComponent
} from './wikipedia-sources-reliability-index/wikipedia-sources-reliability-index.component';
import {Router, RouterModule, Routes, RoutesRecognized} from '@angular/router';
import {HighchartsChartModule} from 'highcharts-angular';
import {SourceRefDirective} from './directives/source-ref.directive';
import {IndiaRoadsAndHighwaysComponent} from './india-roads-and-highways/india-roads-and-highways.component';
import {
  IndiaVehiclesAndAccidentsComponent
} from './india-vehicles-and-accidents/india-vehicles-and-accidents.component';
import {HomeComponent} from './home/home.component';
import {TerrorismInIndiaComponent} from './terrorism-in-india/terrorism-in-india.component';
import {EconomyOfIndiaComponent} from './economy-of-india/economy-of-india.component';
import {ElectrificationOfIndiaComponent} from './electification-of-india/electrification-of-india.component';
import {UkraineRussiaInvasionComponent} from './ukraine-russia-invasion/ukraine-russia-invasion.component';
import {StockMarketComponent} from './stock-market/stock-market.component';

const routes: Routes = [
  {
    path: 'wikipedia-sources-reliability-index',
    component: WikipediaSourcesReliabilityIndexComponent,
    data: {name: 'Wikipedia Sources Reliability Index'}
  },
  {
    path: 'delhi-aqi-during-diwali-season',
    component: DelhiAqiComponent,
    data: {name: 'Delhi AQI During Diwali Season'}
  },
  {
    path: 'india-roads-highways-expressways',
    component: IndiaRoadsAndHighwaysComponent,
    data: {name: 'India\'s Roads Highways Expressways'}
  },
  {
    path: 'india-vehicles-and-accidents',
    component: IndiaVehiclesAndAccidentsComponent,
    data: {name: 'India\'s Vehicles and Accidents'}
  },
  {path: 'terrorism-in-india', component: TerrorismInIndiaComponent, data: {name: 'Terrorism in India'}},
  {path: 'economy-of-india', component: EconomyOfIndiaComponent, data: {name: 'Economy of India'}},
  {
    path: 'electrification-of-india',
    component: ElectrificationOfIndiaComponent,
    data: {name: 'Electrification of India'}
  },
  {
    path: '2022-Russian-invasion-of-Ukraine',
    component: UkraineRussiaInvasionComponent,
    data: {name: '2022 Russian Invasion of Ukraine | Map Timeline'}
  },
  {
    path: 'stock-market',
    component: StockMarketComponent,
    data: {name: 'Stocks, ETFs & Indices | Performance Comparison'}
  },
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    DelhiAqiComponent,
    WikipediaSourcesReliabilityIndexComponent,
    SourceRefDirective,
    IndiaRoadsAndHighwaysComponent,
    IndiaVehiclesAndAccidentsComponent,
    HomeComponent,
    TerrorismInIndiaComponent,
    EconomyOfIndiaComponent,
    ElectrificationOfIndiaComponent,
    UkraineRussiaInvasionComponent,
    StockMarketComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HighchartsChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router, private title: Title) {
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        const windowTitle = event.state.root.firstChild.data['name']?.trim();
        this.title.setTitle((windowTitle ? windowTitle + ' | ' : '') + 'TheDataFact');
      }
    })
  }
}
