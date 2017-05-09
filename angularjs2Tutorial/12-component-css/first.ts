import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <div class="simple-card">First Component</div>
    <style>
      .simple-card {
        border: blue 2px solid;
      }
    </style>
  `
})
export class FirstComponent {

}
