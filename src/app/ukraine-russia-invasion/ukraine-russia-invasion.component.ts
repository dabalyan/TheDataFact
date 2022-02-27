import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {INVASION_IMAGES} from './ukraine-russia-invasion.data';

@Component({
  selector: 'app-ukraine-russia-invasion',
  templateUrl: './ukraine-russia-invasion.component.html',
  styleUrls: ['./ukraine-russia-invasion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UkraineRussiaInvasionComponent implements OnInit, OnDestroy {
  readonly invasionImages = INVASION_IMAGES().reverse();
  selectedImageIndex = this.invasionImages.length - 1;

  playIntervalRef: number;

  ngOnInit(): void {
    document.body.classList.add('flex-app');
  }

  selectImage(i: number, auto = false): void {
    this.selectedImageIndex = i;

    if (!auto) {
      this.stop();
    }
  }

  play(): void {
    clearInterval(this.playIntervalRef);
    this.playIntervalRef = window.setInterval(() => {
      this.selectImage((this.selectedImageIndex + 1) % this.invasionImages.length, true);
    }, 500);
  }

  stop(): void {
    clearInterval(this.playIntervalRef);
    this.playIntervalRef = null;
  }

  ngOnDestroy(): void {
    document.body.classList.remove('flex-app');
    this.stop();
  }
}
