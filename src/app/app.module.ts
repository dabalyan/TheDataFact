import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DelhiAqiComponent} from './delhi-aqi/delhi-aqi.component';
import {
  WikipediaSourcesReliabilityIndexComponent
} from './wikipedia-sources-reliability-index/wikipedia-sources-reliability-index.component';
import {RouterModule, Routes} from '@angular/router';
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
import { UkraineRussiaInvasionComponent } from './ukraine-russia-invasion/ukraine-russia-invasion.component';

const routes: Routes = [
  {path: 'wikipedia-sources-reliability-index', component: WikipediaSourcesReliabilityIndexComponent},
  {path: 'delhi-aqi-during-diwali-season', component: DelhiAqiComponent},
  {path: 'india-roads-highways-expressways', component: IndiaRoadsAndHighwaysComponent},
  {path: 'india-vehicles-and-accidents', component: IndiaVehiclesAndAccidentsComponent},
  {path: 'terrorism-in-india', component: TerrorismInIndiaComponent},
  {path: 'economy-of-india', component: EconomyOfIndiaComponent},
  {path: 'electrification-of-india', component: ElectrificationOfIndiaComponent},
  {path: '2022-Russian-invasion-of-Ukraine', component: UkraineRussiaInvasionComponent},
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
    UkraineRussiaInvasionComponent
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
}
