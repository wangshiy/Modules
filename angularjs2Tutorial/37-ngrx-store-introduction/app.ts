import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { ExampleComponent } from './example';
import { CounterDisplay } from './counter-display';
import { appReducer } from './state';

@NgModule({
  declarations: [
    ExampleComponent,
    CounterDisplay
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore(appReducer)
  ],
  bootstrap: [ExampleComponent]
})
export class AppModule { }
