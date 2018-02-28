import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sec508-dropdown',
  templateUrl: './sec508-dropdown.component.html',
  styleUrls: ['./sec508-dropdown.component.css']
})
export class Sec508DropdownComponent implements OnInit {
  isPressed: boolean = false;
  @Input() dropdownSource;
  
  constructor() { }

  ngOnInit() {
  }
  buttonClick(e) {
    this.isPressed = !this.isPressed
    
  }
}
