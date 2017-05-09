import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h4>Example application showing peer components</h4>
    <blue-card></blue-card>
    <blue-card></blue-card>
    <blue-card></blue-card>
  `
})
export class CardSetComponent { }
