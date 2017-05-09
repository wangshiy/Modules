import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShipsComponent }  from './ships';
import { MyService } from './my-service';

@NgModule({
  declarations: [ShipsComponent],
  imports: [BrowserModule],
  providers: [MyService],
  bootstrap: [ShipsComponent]
})
export class AppModule { }
