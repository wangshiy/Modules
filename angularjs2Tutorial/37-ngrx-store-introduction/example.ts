﻿import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as state from './state';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: './example.html'
})
export class ExampleComponent {
  berry$: Observable<number>;
  apple$: Observable<number>;
  total$: Observable<number>;

  constructor(public store: Store<state.IAppState>) {
    this.berry$ = store.select(s => s.berryCounter);
    this.apple$ = store.select(s => s.appleCounter);
    this.total$ = store.map(s => s.berryCounter + s.appleCounter);
  }

  pickBerry() {
    this.store.dispatch({ type: state.PICK_BERRY });
  }

  pickApple() {
    this.store.dispatch({ type: state.PICK_APPLE });
  }

  pickApples() {
    this.store.dispatch({ type: state.PICK_APPLES, payload: 3 });
  }

  empty() {
    this.store.dispatch({ type: state.EMPTY_CART });
  }
}
