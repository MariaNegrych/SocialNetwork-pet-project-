import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {FriendsService} from '../friends/friends.service';
import {UserModel} from '../../../../models/UserModel';


@Injectable({
  providedIn: 'root'
})
export class FriendsResolveService implements Resolve<UserModel[]> {

  constructor(private friendsService: FriendsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel[]> {
    return this.friendsService.getFriends();
  }
}
