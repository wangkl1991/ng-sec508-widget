import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Sec508ButtonComponent } from './sec508-button/sec508-button.component';
import { Button508Directive } from './sec508-button/button508.directive';
import { RoundbuttonComponent } from './roundbutton/roundbutton.component';
import { Sec508ListboxModule } from './sec508-listbox/sec508-listbox.module';
import { Sec508DropdownModule } from './sec508-dropdown/sec508-dropdown.module';


@NgModule({
  declarations: [
    AppComponent,
    Sec508ButtonComponent,
    Button508Directive,
    RoundbuttonComponent
  ],
  imports: [
    BrowserModule,
    Sec508ListboxModule,
    Sec508DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
