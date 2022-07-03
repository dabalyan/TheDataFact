import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHighlight'
})
export class SearchHighlightPipe implements PipeTransform {

  transform(value: string, search: string): unknown {
    return value.replace(new RegExp(`(${search})`, 'i'), '<b>$1</b>');
  }

}
