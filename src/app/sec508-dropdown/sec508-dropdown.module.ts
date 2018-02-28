import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sec508DropdownComponent } from './sec508-dropdown/sec508-dropdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    Sec508DropdownComponent
  ],
  declarations: [Sec508DropdownComponent]
})
export class Sec508DropdownModule { }
