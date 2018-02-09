import { Directive, HostListener, ElementRef,  } from '@angular/core';

import { Renderer2, HostBinding } from '@angular/core';
@Directive({
  selector: '[Button508]'
})
export class Button508Directive {
  isClicked = false;
  // @HostBinding('attr.aria-pressed')  = false;
  
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'black' ;
  // @HostListener("mouseenter") mouseover(evenData: Event) {
  //   this.backgroundColor = 'blue';
  // }
  // @HostListener("mouseleave") mouseleave(evenData: Event) {
  //   this.backgroundColor = 'black';
  // }
  @HostListener("click") click(evenData: Event) {
      console.log(evenData);
  }
  



  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

}
