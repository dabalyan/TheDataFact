import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {INVASION_IMAGES} from './ukraine-russia-invasion.data';

@Component({
  selector: 'app-ukraine-russia-invasion',
  templateUrl: './ukraine-russia-invasion.component.html',
  styleUrls: ['./ukraine-russia-invasion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UkraineRussiaInvasionComponent implements OnInit, OnDestroy {
  invasionImages = INVASION_IMAGES().reverse();
  selectedImageIndex = this.invasionImages.length - 1;

  showAllUpdates = false;
  showComment = true;
  playIntervalRef: number;

  ngOnInit(): void {
    document.body.classList.add('flex-app');
    this.initResetImages();
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

  toggleTimeSpan(): void {
    this.showAllUpdates = !this.showAllUpdates;
    this.initResetImages();
  }

  initResetImages(): void {
    if (this.showAllUpdates) {
      this.invasionImages = INVASION_IMAGES().reverse();
    }
    else {
      this.invasionImages = this.invasionImages.filter(({date}, i) => {
        const imageDate = Number(new Date(date).toLocaleDateString('en', {day: 'numeric', timeZone: 'Europe/Kiev'}));
        const nextImageDate = i < this.invasionImages.length - 1 && Number(new Date(this.invasionImages[i + 1].date).toLocaleDateString('en', {
          day: 'numeric',
          timeZone: 'Europe/Kiev'
        }));
        const isLastUpdate = i === this.invasionImages.length - 1 || !!Math.abs(nextImageDate - imageDate);
        return isLastUpdate;
      });
    }

    this.selectedImageIndex = this.invasionImages.length - 1;
  }

  ngOnDestroy(): void {
    document.body.classList.remove('flex-app');
    this.stop();
  }
}
