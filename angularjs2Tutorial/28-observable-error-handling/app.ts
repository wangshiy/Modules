import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PhonesComponent }  from './phones';
import { PhoneService }  from './service';

@NgModule({
  declarations: [PhonesComponent],
  imports: [BrowserModule, HttpModule],
  providers: [PhoneService],
  bootstrap: [PhonesComponent]
})
export class AppModule { }
