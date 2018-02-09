import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Sec508ButtonComponent } from './sec508-button/sec508-button.component';


@NgModule({
  declarations: [
    AppComponent,
    Sec508ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
