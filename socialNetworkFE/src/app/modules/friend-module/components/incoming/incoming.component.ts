import {Component, Input, OnInit} from '@angular/core';

import {UserModel} from '../../../../models/UserModel';
import {FriendsService} from '../../services/friends/friends.service';

@Component({
  selector: 'app-incoming',
  templateUrl: './incoming.component.html',
  styleUrls: ['./incoming.component.css']
})
export class IncomingComponent implements OnInit {

  @Input()
  friend: UserModel;

  isHidden: boolean;

  constructor(private friendsService: FriendsService) {
  }

  ngOnInit(): void {
    this.isHidden = false;
  }

  accept(friendId) {
    this.friendsService.acceptIncoming(friendId).subscribe(data => {
    }, ({error}) => {
      if (error.message) {
        alert(error.message);
      }
    });

    this.isHidden = true;
  }

  ignore(friendId) {
    this.friendsService.ignoreIncoming(friendId).subscribe(data => {
    }, ({error}) => {
      if (error.message) {
        alert(error.message);
      }
    });

    this.isHidden = true;
  }
}
