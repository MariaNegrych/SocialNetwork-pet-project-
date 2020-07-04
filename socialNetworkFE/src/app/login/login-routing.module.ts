import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloComponent} from './component/login/hello.component';
import {HiUserComponent} from './component/hi-user/hi-user.component';
import {AllUsersComponent} from '../modules/user-module/components/all-users/all-users.component';
import {FriendsResolveService} from '../modules/friend-module/services/friends-resolve/friends-resolve.service';
import {AllFriendsComponent} from '../modules/friend-module/components/all-friends/all-friends.component';
import {UserResolverService} from '../modules/user-module/services/user-resolver/user-resolver.service';

const routes: Routes = [
  {path: '', component: HelloComponent},

  {path: `user`,
    component: HiUserComponent, children: [
      {
        path: `users`,
        component: AllUsersComponent,
        resolve: {allUsers: UserResolverService}
      },
      {
        path: 'friends',
        component: AllFriendsComponent,
        resolve: {allFriends: FriendsResolveService}
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
