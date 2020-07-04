import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserComponent} from './components/user/user.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        AllUsersComponent,
        UserComponent
    ],
    exports: [
        AllUsersComponent
    ],
    imports: [
        CommonModule,
        UserModuleRoutingModule,
        ReactiveFormsModule
    ]
})
export class UserModuleModule { }
