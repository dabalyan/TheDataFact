import {Component, Pipe, PipeTransform, ViewEncapsulation} from '@angular/core';
import {MEGA_PROJECTS, MegaProject} from './mega-projects.data';
import {BILLION, CRORE, MILLION} from '../utils/constants';

@Pipe({
  name: 'completionYearPipe'
})
export class CompletionYearPipe implements PipeTransform {
  transform(projects: MegaProject[], year: string): any {
    return !year ? projects : projects.filter(project => project.type === 'divider' || project.launchDate?.includes(year));
  }
}

@Component({
  selector: 'app-mega-projects',
  templateUrl: './mega-projects.component.html',
  styleUrls: ['./mega-projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MegaProjectsComponent {
  readonly allProjects = MEGA_PROJECTS;
  readonly crore = CRORE;
  readonly million = MILLION;
  readonly billion = BILLION;
  readonly inrUsd = 75;
  currency: 'USD' | 'INR' = 'INR';
  completionYear: string = '';
  completionYears: string[] = [...new Set(MEGA_PROJECTS.filter(({launchDate}) => launchDate).map(({launchDate}) => launchDate.match(/\d{4}/)[0]))].sort();
}
