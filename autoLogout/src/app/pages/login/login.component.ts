import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder} from '@angular/forms';
import { LoginService } from './login.service';

import * as _ from 'lodash';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})

export class Login {

  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService) {
  }
}


