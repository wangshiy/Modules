import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  UserOperationCounterDirective,
} from './directives';

const DEFAULT_CONFIG = [
];

const SHARED_COMPONENT = [
];

const SHARED_PIPES = [
];

const SHARED_DIRECTIVES = [
  UserOperationCounterDirective,
];

const SHARED_SERVICES = [
];

const IMPORTED_MODULES = [
];

@NgModule({
  imports: [
    ...IMPORTED_MODULES,
  ],
  declarations: [
    ...SHARED_PIPES,
    ...SHARED_DIRECTIVES,
    ...SHARED_COMPONENT,
  ],
  providers: [
    DatePipe,
    ...DEFAULT_CONFIG,
    ...SHARED_SERVICES,
  ],
  exports: [
    ...SHARED_PIPES,
    ...SHARED_DIRECTIVES,
    ...SHARED_COMPONENT,
  ],
})

export class SharedModule {}
