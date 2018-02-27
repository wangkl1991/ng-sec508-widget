import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sec508ListboxComponent } from './sec508-listbox/sec508-listbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Sec508ListboxComponent],
  exports:[Sec508ListboxComponent]
})
export class Sec508ListboxModule { }
