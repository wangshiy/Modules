import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PhonesComponent }  from './phones';
import { PhoneLoader } from './phoneLoader';

@NgModule({
  declarations: [PhonesComponent],
  imports: [BrowserModule, HttpModule],
  providers: [PhoneLoader],
  bootstrap: [PhonesComponent]
})
export class AppModule { }
