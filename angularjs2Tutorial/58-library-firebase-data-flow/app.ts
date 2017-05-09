import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

import { ActivityPanel } from './activityPanel';
import { PersonList } from './personList';
import { OnePerson } from './onePerson';
import { ExampleComponent } from './example';

export const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>',

  databaseURL: 'https://a2-fb-demo.firebaseio.com/'
};

@NgModule({
  declarations: [ExampleComponent, ActivityPanel, PersonList, OnePerson],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [ExampleComponent]
})
export class AppModule { }
