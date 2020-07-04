import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { HiUserComponent } from './component/hi-user/hi-user.component';
import {UserModuleModule} from '../modules/user-module/user-module.module';


@NgModule({
  declarations: [HiUserComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    UserModuleModule
  ]
})
export class LoginModule { }
