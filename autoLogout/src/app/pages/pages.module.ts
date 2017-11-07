import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { Pages } from './index';
import { SharedModule } from './shared/index';
import {
   AutoLogoutService,
 } from '../services/index';

 const providersList = [
   AutoLogoutService,
 ];

const componentsList = [
  Pages,
];

const modulesList = [
  CommonModule,
  routing,
  SharedModule,
];

@NgModule({
  imports: [
    ...modulesList,
  ],
  declarations: [
    ...componentsList,
  ],
  providers: [
    ...providersList,
  ],
})

export class PagesModule {}
