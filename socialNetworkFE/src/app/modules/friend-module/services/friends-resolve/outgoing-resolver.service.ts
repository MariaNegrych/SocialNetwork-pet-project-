import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {UserModel} from "../../../../models/UserModel";
import {Observable} from "rxjs";
import {FriendsService} from "../friends/friends.service";

@Injectable({
  providedIn: 'root'
})
export class OutgoingResolverService implements Resolve<UserModel[]>{

  constructor(private friendsService: FriendsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel[]> | Promise<UserModel[]> | UserModel[] {
    return this.friendsService.getOutgoing();
  }
}
