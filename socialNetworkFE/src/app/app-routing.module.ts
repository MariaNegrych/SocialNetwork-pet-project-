import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'user/friend', loadChildren: () => import('./modules/friend-module/friends-module.module').then(m => m.FriendsModuleModule)},
  {path: 'user/users', loadChildren: () => import('./modules/user-module/user-module.module').then(m => m.UserModuleModule)}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
