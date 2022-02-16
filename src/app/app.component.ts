import {Component, HostListener, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  windowSize: { width: number, height: number };

  @HostListener('window:resize')
  onWindowResize(): void {
    this.windowSize = {width: window.innerWidth, height: window.innerHeight};
  }

  constructor() {
    this.onWindowResize();
  }
}
