import {Component, Pipe, PipeTransform, ViewEncapsulation} from '@angular/core';
import {COMPLETION_YEARS, MEGA_PROJECTS, MegaProject} from './mega-projects.data';
import {BILLION, CRORE, MILLION} from '../utils/constants';
import {QueryParam} from '../utils/query-param';

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
  completionYears: string[] = COMPLETION_YEARS;
  @QueryParam('', COMPLETION_YEARS) completionYear: string;
  @QueryParam('INR', ['USD', 'INR']) currency: 'USD' | 'INR';
}
