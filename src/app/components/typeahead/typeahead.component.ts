import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TypeaheadComponent implements OnInit {
  @Input() placeholder = 'search';
  @Input() showSearchResults: boolean;
  @Output() readonly showSearchResultsChange = new EventEmitter<boolean>();
  @Output() readonly search = new EventEmitter<string>();

  @HostListener('window:click', ['$event.target'])
  onDocumentClick(targetElement): void {
    if(!this.elementRef.nativeElement.contains(targetElement)) {
      this.toggleSearchResults(false);
    }
  }

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  toggleSearchResults(state: boolean): void {
    this.showSearchResultsChange.emit(this.showSearchResults = state);
  }
}
