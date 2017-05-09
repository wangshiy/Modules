import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GreeterComponent } from './greeter';

import { GreetingCalculator } from './greetingCalculator';

@NgModule({
  declarations: [GreeterComponent],
  imports: [BrowserModule],
  providers: [GreetingCalculator],
  bootstrap: [GreeterComponent]
})
export class AppModule { }
