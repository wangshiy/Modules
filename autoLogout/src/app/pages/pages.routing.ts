import { Routes, RouterModule } from '@angular/router';
import { Pages } from './index';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
  },
  {
    path: 'pages',
    component: Pages,
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
