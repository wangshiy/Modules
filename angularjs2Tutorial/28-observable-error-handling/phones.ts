import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PhoneService } from './service';

@Component({
  selector: 'my-app',
  template: `
    <h3>Phones</h3>
    <ul>
      <li *ngFor="let p of phones | async">
        {{p.name}}
      </li>
    </ul>
  `
})
export class PhonesComponent {
  phones: Observable<any[]>;

  constructor(ps: PhoneService) {
    this.phones = ps.getPhones();
    // this.phones = ps.poll1();
    // this.phones = ps.poll2();
  }
}
