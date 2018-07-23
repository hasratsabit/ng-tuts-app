import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent, data: { state: 'login'}},
  { path: 'register', component: RegisterComponent,  data: { state: 'register'}},
  { path: 'profile', component: ProfileComponent, data: { state: 'profile'}},
  { path: 'logout', component: LogoutComponent, data: { state: 'logout'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
