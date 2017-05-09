import { Component, Input, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'weather-panel',
  templateUrl: './weatherPanel.html'
})
export class WeatherPanel implements OnInit {
  @Input() city: string;

  hourly$: FirebaseListObservable<any>;
  currently$: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.hourly$ = this.af.database.list(this.city + '/' + 'hourly/data',
      {
        query: {
          limitToLast: 10
        }
      });

    this.currently$ = this.af.database.object(this.city + '/' + 'currently');
  }
}
