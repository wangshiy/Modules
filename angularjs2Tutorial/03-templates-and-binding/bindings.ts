import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './bindings.html'
})
export class BindingsComponent {
  version: string;
  // Implicit public, equivalent to
  // public version: string;
  // (public is the default in TypeScript.)
  // Angular.io style guide recommends implicit public.
  person: string;
  stringWithHtml: string;
  personObject: { mother: string; siblings: String[]}; // String[] to define array contains only one type
  itfObj: interfaceObject;
  private x: string = 'Only available inside'; //any -> means any type; string | number -> means string or number type

  constructor() {
    this.version = 'Other';
    this.person = 'everyone';
    this.stringWithHtml = `
      <button onClick="console.log('hello from old-school HTML/JS');">
        Press Me
      </button>
      <i>Hello from <b>HTML</b></i>
      <p>${this.calculate()} this is evaluate expression</p> 
    `;
    this.personObject = { mother: 'Jane', siblings: ['Tom','Jerry'] };
    this.x = 'Hello World';
    this.itfObj = [1, 'James'];
  }

  calculate(): number {// if remove number ts will infer the return type is what you return implicitly
    console.log('calculating');
    return 22 / 7;
  }
}

interface interfaceObject{
  children: Array<String | Number>; // The way to define array containing multiple types
}
