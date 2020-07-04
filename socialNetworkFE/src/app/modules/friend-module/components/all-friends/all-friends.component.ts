import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../../../../models/UserModel';


@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.css']
})
export class AllFriendsComponent implements OnInit {

  friends: UserModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.friends = this.activatedRoute.snapshot.data.allFriends;
  }

  ngOnInit() {
  }

}
