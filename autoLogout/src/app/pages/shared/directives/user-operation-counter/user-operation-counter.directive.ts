import { Directive, HostListener } from '@angular/core';
import { AutoLogoutService } from '../../../../services/auto-logout.service';

@Directive({
  selector: '[timeout]',
})

export class UserOperationCounterDirective {

  constructor (private autoLogoutService: AutoLogoutService) {

  }

  @HostListener('mousemove') onMouseMove() {
    console.log('mouse move')
    this.autoLogoutService.setStartTime();
  }

  @HostListener('document:keyup') onKeyUp() {
    this.autoLogoutService.setStartTime();
  }
}
