import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appSourceRef]'
})
export class SourceRefDirective implements OnChanges {
  @Input() appSourceRef: string;

  constructor(private elRef: ElementRef<HTMLAnchorElement>) {
  }

  ngOnChanges(): void {
    this.update();
  }

  update(): void {
    this.elRef.nativeElement.innerText = '[s]';
    this.elRef.nativeElement.href = this.appSourceRef;
    this.elRef.nativeElement.classList.add('source-ref');
    this.elRef.nativeElement.setAttribute('title', 'Source: ' + this.appSourceRef);
    this.elRef.nativeElement.setAttribute('target', '_blank');
    this.elRef.nativeElement.setAttribute('rel', 'noopener');
  }
}
