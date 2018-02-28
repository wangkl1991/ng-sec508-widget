import { Component, OnInit, Input,} from '@angular/core';



@Component({
  selector: 'sec508-dropdown',
  templateUrl: './sec508-dropdown.component.html',
  styleUrls: ['./sec508-dropdown.component.css']
})


export class Sec508DropdownComponent implements OnInit {
  @Input() dropdownSource;
  
  isPressed: boolean = false;
  selectEle: string;
  
  constructor() { }

  ngOnInit() {
    this.selectEle = this.dropdownSource? this.dropdownSource[0] : "No data";
    
  }
  buttonClick(e) {
    this.isPressed = !this.isPressed;
    console.log(e);
     e.target.attributes[1].value = e.target.attributes[1].value === "true"? "false": "true";
  }
  listClick(e){
    console.log(e);
    this.selectEle = e.target.innerHTML;
  }
  keyOperation(e){
    console.log(e);
  }

}
