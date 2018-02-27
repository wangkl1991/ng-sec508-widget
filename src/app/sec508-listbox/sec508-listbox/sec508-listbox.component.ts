import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'sec508-listbox',
  templateUrl: './sec508-listbox.component.html',
  styleUrls: ['./sec508-listbox.component.css']
})

export class Sec508ListboxComponent implements OnInit {
  isPressed: boolean = false;

  @Input() listSource;


  ngOnInit() {
    console.log(this.listSource[0])
  }


  buttonClick(e){
    this.isPressed = !this.isPressed;
    console.log(e);
  }

}
