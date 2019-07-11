import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appPositiveInteger]'
})
export class PositiveIntegerDirective {
  constructor(private el: ElementRef) {
  }

  //@HostListener is a decorator for attaching to DOM event: https://metanit.com/web/angular2/3.3.php
  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const initialValue = this.el.nativeElement.value;

    //Using regex to remove all the symbols except numerals: 0..9
    this.el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');

    //if forbidden characters have been deleted
    if (initialValue !== this.el.nativeElement.value) {
      //Prevent bubbling: https://learn.javascript.ru/event-bubbling
      event.stopPropagation();
    }
  }
}
