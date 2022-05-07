import { Component, ViewEncapsulation } from '@angular/core';
import { registeredBirths, registeredDeaths } from './births-and-deaths.data';

@Component({
  selector: 'app-births-and-deaths',
  templateUrl: './births-and-deaths.component.html',
  styleUrls: ['./births-and-deaths.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BirthsAndDeathsComponent {
  readonly registeredDeaths: any = registeredDeaths;
  readonly registeredBirths: any = registeredBirths;
  activeStat: 'births' | 'deaths' = 'deaths';

  selectStat(stat: 'births' | 'deaths'): void {
    this.activeStat = stat;
  }
}
