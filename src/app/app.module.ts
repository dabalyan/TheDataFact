import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DelhiAqiComponent} from './delhi-aqi/delhi-aqi.component';
import {WikipediaSourcesReliabilityIndexComponent} from './wikipedia-sources-reliability-index/wikipedia-sources-reliability-index.component';
import {RouterModule, Routes} from '@angular/router';
import {HighchartsChartModule} from 'highcharts-angular';

const routes: Routes = [
  {path: 'wikipedia-sources-reliability-index', component: WikipediaSourcesReliabilityIndexComponent},
  {path: 'delhi-aqi-during-diwali-season', component: DelhiAqiComponent},
  {path: '', redirectTo: 'wikipedia-sources-reliability-index', pathMatch: 'full'},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    DelhiAqiComponent,
    WikipediaSourcesReliabilityIndexComponent
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
