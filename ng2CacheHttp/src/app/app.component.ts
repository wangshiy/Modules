import {Component, OnDestroy, OnInit} from '@angular/core';
import { AppService } from './app.service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  private alive: boolean;
  private innerAlive: boolean;
  private outerAlive: boolean;
  // view model is public
  public randomNumber: number;

  constructor(private appService: AppService) {
    this.alive = true;
    this.innerAlive = true;
    this.outerAlive = true;
  }

  getTopic() {
    this.appService.getTopic('http://localhost:3000/topic').subscribe((res) => {
      console.log('res', res);
    });
  }

  ngOnInit() {
    IntervalObservable.create(5000)
      .takeWhile(() => this.alive && this.outerAlive) // only fires when component is alive
      .subscribe((e) => {
        console.log('outer counter', e);
        this.innerAlive = true;
        this.appService.getTopicWithoutCache('http://localhost:3000/topic')
          .takeWhile(() => this.alive && this.innerAlive)
          .subscribe(data => {
            console.log('data', data);
            this.randomNumber = data.name;
            if (this.randomNumber > 50) {
              this.outerAlive = false;
            }
            this.innerAlive = false; // switch inner observable off after received data
          });
      });
  }

  ngOnDestroy() {
    this.alive = false; // switches your TimerObservable off
    this.innerAlive = false;
  }
}
