// This component displays a single entry from Firebase on the screen.

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'one-person',
  template: `
  <div>
    <b>Person {{id}}:</b>
    <p>{{ person$ | async | json }}</p>
    <p>{{ (person$ | async)?.name}}</p>
  </div>
  `
})
export class OnePerson implements OnInit {
  @Input() id: string;
  person$: Observable<any>;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.person$ = this.af.database.object('/stuff/cat1/' + this.id);
  }
}
