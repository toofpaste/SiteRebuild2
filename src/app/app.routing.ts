import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShowBestComponent } from './showBest/showBest.component';
import {ShowTopComponent} from './show-top/show-top.component';
import {ShowHotComponent} from './show-hot/show-hot.component';
import {ShowNewComponent} from './show-new/show-new.component';
import {ShowControversialComponent} from './show-controversial/show-controversial.component';
import {ShowRisingComponent} from './show-rising/show-rising.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'best',
    component: ShowBestComponent
  },
  {
    path: 'hot',
    component: ShowHotComponent
  },
  {
    path: 'new',
    component: ShowNewComponent
  },
  {
    path: 'rising',
    component: ShowRisingComponent
  },
  {
    path: 'controversial',
    component: ShowControversialComponent
  },
  {
    path: 'top',
    component: ShowTopComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
