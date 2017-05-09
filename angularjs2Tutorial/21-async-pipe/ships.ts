import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IShip, MyService } from './my-service';

@Component({
  selector: 'my-app',
  templateUrl: 'ships.html'
})
export class ShipsComponent {
  ships1: Observable<IShip[]>;
  ships2: Promise<IShip[]>;

  constructor(api: MyService) {
    this.ships1 = api.loadShips1();
    this.ships2 = api.loadShips2();

    // This subscription will 'leak':
    // this.ships1.subscribe((x) => {
    //   console.log(x);
    // });
  }
}
