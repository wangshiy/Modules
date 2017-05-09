import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <div class="simple-card">Second Component</div>
  `,
  styles: [`
    .simple-card {
      border: green 2px solid;
    }
    :host {
      display: block;
      border: 2px solid #ccc;
    }
  `]
})
export class SecondComponent {

}
