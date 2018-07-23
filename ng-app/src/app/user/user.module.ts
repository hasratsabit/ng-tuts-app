import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { UserDirective } from './common/user.directive';

@NgModule({
  imports: [
    UserRoutingModule,
    SharedModule
  ],
  declarations: [
    RegisterComponent, 
    LoginComponent, 
    ProfileComponent, 
    LogoutComponent, 
    UserDirective
  ]
})
export class UserModule { }
