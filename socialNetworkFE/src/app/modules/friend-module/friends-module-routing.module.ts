import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllFriendsComponent} from './components/all-friends/all-friends.component';
import {FriendsResolveService} from './services/friends-resolve/friends-resolve.service';


const routes: Routes = [
  {path: '', component: AllFriendsComponent, resolve: {allFriends : FriendsResolveService}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendsModuleRoutingModule { }
