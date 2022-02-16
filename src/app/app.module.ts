import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

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

const routes: Routes = [
  {path: 'wikipedia-sources-reliability-index', component: WikipediaSourcesReliabilityIndexComponent},
  {path: 'delhi-aqi-during-diwali-season', component: DelhiAqiComponent},
  {path: 'india-roads-highways-expressways', component: IndiaRoadsAndHighwaysComponent},
  {path: 'india-vehicles-and-accidents', component: IndiaVehiclesAndAccidentsComponent},
  {path: '', redirectTo: 'wikipedia-sources-reliability-index', pathMatch: 'full'},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    DelhiAqiComponent,
    WikipediaSourcesReliabilityIndexComponent,
    SourceRefDirective,
    IndiaRoadsAndHighwaysComponent,
    IndiaVehiclesAndAccidentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
