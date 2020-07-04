import {Component, Input, OnInit} from '@angular/core';

import {UserModel} from '../../../../models/UserModel';
import {UserService} from '../../services/user/user.service';
import {FriendsService} from '../../../friend-module/services/friends/friends.service';

@Component({
  selector: 'app-album',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: UserModel;

  isHidden = false;

  constructor(private userService: UserService, private friendsService: FriendsService) {
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  addToFriends(friendId) {
    this.userService.sendRequestForFriendship(friendId).subscribe(data => {
    }, ({error}) => {
      if (error.message) {
        alert(error.message);
      }
    });

    this.isHidden = true;
  }

  acceptInvite(friendId) {
    this.friendsService.acceptIncoming(friendId).subscribe(data => {
    }, ({error}) => {
      if (error.message) {
        alert(error.message);
      }
    });

    this.isHidden = true;
  }

  declineInvite(friendId) {
    this.friendsService.ignoreIncoming(friendId).subscribe(data => {
    }, ({error}) => {
      if (error.message) {
        alert(error.message);
      }
    });

    this.isHidden = true;
  }

  cancelRequest(friendId) {
    this.friendsService.cancelRequest(friendId).subscribe(data => {
    }, ({error}) => {
      if (error.message) {
        alert(error.message);
      }
    });

    this.isHidden = true;
  }

  removeFromFriends(friendId) {
    this.friendsService.removeFriend(friendId).subscribe(data => {
    }, ({error}) => {
      if (error.message) {
        alert(error.message);
      }
    });

    this.isHidden = true;
  }
}
