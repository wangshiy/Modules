import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

import { WeatherScreen } from './weatherScreen';
import { WeatherPanel } from './weatherPanel';
import { SecondsToDatePipe } from './secondsToDatePipe';

export const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>',

  databaseURL: 'https://publicdata-weather.firebaseio.com/'
};

@NgModule({
  declarations: [WeatherScreen, WeatherPanel, SecondsToDatePipe],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [WeatherScreen]
})
export class AppModule { }
