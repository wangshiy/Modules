import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { PhoneLoader } from './phoneLoader';

@Component({
  selector: 'my-app',
  templateUrl: './phones.html'
})
export class PhonesComponent {
  phones: Observable<{}[]>;
  phonesText: Observable<string>;

  constructor(phoneLoader: PhoneLoader) {
    const phoneObs = phoneLoader.load();

    this.phones = phoneObs
      .do(res => console.log(res))
      .map(res => res.json());

    this.phonesText = phoneObs
      .map((res: Response) => res.text());
  }
}
