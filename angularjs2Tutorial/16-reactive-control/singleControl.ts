import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './singleControl.html'
})
export class SingleControlComponent {
  myFormControl: FormControl;
  outputValue: string;

  constructor() {
    this.myFormControl = new FormControl('placeholder', Validators.required);
  }

  setValue() {
    this.myFormControl.setValue('Set from code');
  }

  useValue() {
    this.outputValue = 'testing 123 - ' + this.myFormControl.value;
  }
}
