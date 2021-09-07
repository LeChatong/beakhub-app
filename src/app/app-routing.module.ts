import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {appConfig} from "./app.config";
import {AuthGuardAfterLoginService} from "./core/auth-guard/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    redirectTo: appConfig.routes.home.home,
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardAfterLoginService]
  },
  {
    path: 'job',
    loadChildren: () => import('./job/job.module').then(m => m.JobPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
