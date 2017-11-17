import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/map'

@Injectable()
export class AppService {

  private topic$: any;
  constructor(private http: Http) {

  }

  getTopic(requestUrl: string): Observable<any> {
    if (!this.topic$) {
      this.topic$ = this.http['get'](requestUrl, {})
        .map((res) => res.json())
        .publishReplay(1).refCount();
    }
    console.log('this.topic$', this.topic$);
    return this.topic$;
  }

  getTopicWithoutCache(requestUrl: string): Observable<any> {
    return this.http['get'](requestUrl, {}).map((res) => res.json());
  }
}
