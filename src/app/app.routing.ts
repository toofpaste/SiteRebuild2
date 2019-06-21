import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShowBestComponent } from './showBest/showBest.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'best',
    component: ShowBestComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
