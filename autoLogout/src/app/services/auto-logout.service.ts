import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AutoLogoutService {

  private timer: any;

  private startTime: Date;

  constructor(private router: Router) {
  }

  public setStartTime() {
    if (!this.timer) {
      this.startTimer();
    } else {
      this.startTime = new Date();
    }
  }

  public startTimer() {
    console.log('start timer');
    if (!this.timer) {
      this.startTime = new Date();
      this.timer = setInterval(
        () => {
          const timeSpan: number = new Date().getTime() - this.startTime.getTime();
          if (timeSpan > 1000 * 60 * 0.1) {
            this.stopTimer();
            this.logout();
          }
        },
        1000);
    }
  }

  private stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private logout() {
    this.router.navigate(['/login']);
  }
}
