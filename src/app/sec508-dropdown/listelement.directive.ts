import { Directive, HostBinding, ElementRef, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appListelement]'
})
export class ListelementDirective {
  
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostListener('mouseenter', ['$event']) mouseover(eventData: Event) {
    console.log(eventData);
   this.backgroundColor = '#F0F0F0';

  } 
  @HostListener('mouseleave', ['$event']) mouseleave(eventData:Event) {
    this.backgroundColor = 'transparent'
  }
  @HostListener('click', ['$event']) click(eventData:Event) {
    this.backgroundColor = 'yellow';
    
  }

  @HostListener('unclick', ['$event']) unclick(eventData:Event) {
    this.backgroundColor = 'transparent';
    
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

}
