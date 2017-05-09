import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { EmployeeLoader, IEmployee } from './employeeLoader';

@Component({
  selector: 'employee-detail',
  templateUrl: './employeeDetail.html'
})
export class EmployeeDetailComponent {
  theEmployee$: Observable<IEmployee>;

  constructor(route: ActivatedRoute, loader: EmployeeLoader) {
    this.theEmployee$ = route.params
      .map(params => params['employeeId'])
      .switchMap(id => loader.getDetails(id));
  }
}
