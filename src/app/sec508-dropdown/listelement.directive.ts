import { Directive, HostBinding, ElementRef, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appListelement]'
})
export class ListelementDirective {
  
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostListener('mouseenter') mouseover(eventData: Event) {
   this.backgroundColor = '#F0F0F0';

  } 
  @HostListener('mouseleave') mouseleave(eventData:Event) {
    this.backgroundColor = 'transparent'
  }

  

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

}
