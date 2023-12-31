import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FullLayoutV2Component } from './layouts/full-layout-v2/full-layout-v2.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { HeaderLayoutComponent } from './layouts/header-layout/header-layout.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path : '',
    component : HeaderLayoutComponent,
    children : [
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }    
    ]
  },
  {
    path : '',
    component : FullLayoutV2Component,
    canActivate: [AuthGuardGuard],
    children : [
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
