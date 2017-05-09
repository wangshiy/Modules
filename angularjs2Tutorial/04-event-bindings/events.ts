import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './events.html'
})
export class EventsComponent {
  n: number = 0;

  increment() {
    this.n++;
  }

  over(x: MouseEvent): void {
    console.log('Over: ', x);
  }

  move(x: MouseEvent): void {
    this.n++;
    console.log('Move: ', x);
  }

  keydown(x: Event): void {
    this.n++;
    console.log('Keydown: ', x);
  }

  copy(x: Event): void {
    this.n++;
    console.log('Copy: ', x);
  }
}
