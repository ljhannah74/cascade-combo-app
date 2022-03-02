import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectService } from './select.service';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';

@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule],
  declarations: [ AppComponent, CountryComponent, StateComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SelectService]
})
export class AppModule { 

}
