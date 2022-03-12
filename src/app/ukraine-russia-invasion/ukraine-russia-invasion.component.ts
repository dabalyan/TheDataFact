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

  showAllUpdates = true;
  showComment = true;
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

  toggleTimeSpan(): void {
    this.showAllUpdates = !this.showAllUpdates;

    if (this.showAllUpdates) {
      this.invasionImages = INVASION_IMAGES().reverse();
    }
    else {
      let lastDate: number;
      this.invasionImages = this.invasionImages.filter(({date}) => {
        const imageDate = new Date(date).getDate();
        const isNextDay = !lastDate || Math.abs(imageDate - lastDate);

        if (isNextDay) {
          lastDate = imageDate;
        }
        return isNextDay;
      });
    }

    this.selectedImageIndex = this.invasionImages.length - 1;
  }

  ngOnDestroy(): void {
    document.body.classList.remove('flex-app');
    this.stop();
  }
}
