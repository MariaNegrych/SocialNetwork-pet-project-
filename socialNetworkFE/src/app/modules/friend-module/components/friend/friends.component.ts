import {Component, Input, OnInit} from '@angular/core';

import {UserModel} from '../../../../models/UserModel';
import {FriendsService} from '../../services/friends/friends.service';


@Component({
  selector: 'app-todos',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  @Input()
  friend: UserModel;

  hidden: boolean;

  constructor(private friendsService: FriendsService) {
  }

  ngOnInit(): void {
    this.hidden = false;
  }

  remove(friendId) {
    this.friendsService.removeFriend(friendId).subscribe(data => {
    }, ({error}) => {
      if (error.message) {
        alert(error.message);
      }
    });

    this.hidden = true;
  }
}
