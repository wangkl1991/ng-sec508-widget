import { Directive, HostListener, ElementRef,  } from '@angular/core';

import { Renderer2, HostBinding, OnInit } from '@angular/core';
@Directive({
  selector: '[Button508]'
})
export class Button508Directive implements  OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  
  @HostBinding('attr.aria-pressed')  pressed= false;
  @HostListener("click") click(evenData:Event) {
     this.pressed =true;
  }
  //@HostBinding('role')

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size' , '20px')
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#E41D8A' );
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.elRef.nativeElement, 'padding', '15px 32px');
  }


  




}
