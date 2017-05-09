import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StarshipApi, IFilm } from './starshipApi';

// Import all Rx operators at once;
// Convenient for development, not optimal for production.
// TODO change this, so that we show good practices not bad ones.
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  providers: [StarshipApi],
  templateUrl: 'starshipList.html'
})
export class StarshipListComponent {
  starships$: Observable<IFilm[]>;

  constructor(api: StarshipApi) {
    this.starships$ = api.starships();
  }
}
