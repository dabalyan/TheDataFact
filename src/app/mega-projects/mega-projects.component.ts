import {Component, ViewEncapsulation} from '@angular/core';
import {MEGA_PROJECTS} from './mega-projects.data';

@Component({
  selector: 'app-mega-projects',
  templateUrl: './mega-projects.component.html',
  styleUrls: ['./mega-projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MegaProjectsComponent {
  readonly allProjects = MEGA_PROJECTS;
}
