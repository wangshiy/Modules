import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardSetComponent } from './card-set';
import { BlueCardComponent } from './blue-card';

@NgModule({
  declarations: [
    CardSetComponent,
    BlueCardComponent
  ],
  imports: [BrowserModule],
  bootstrap: [CardSetComponent]
})
export class AppModule { }
