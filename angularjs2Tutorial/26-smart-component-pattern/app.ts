import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PageComponent } from './page';
import { EmployeeListComponent } from './employeeList';
import { EmployeeDetailComponent } from './employeeDetail';
import { EmployeeDisplayComponent } from './employeeDisplay';
import { EmployeeLoader } from './employeeLoader';

const appRoutes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/:employeeId', component: EmployeeDetailComponent }
];

@NgModule({
  declarations: [
    PageComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeDisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    HttpModule
  ],
  providers: [EmployeeLoader],
  bootstrap: [PageComponent]
})
export class AppModule { }
