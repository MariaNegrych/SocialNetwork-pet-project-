import {Component, Input, OnInit} from '@angular/core';

import {UserModel} from '../../../../models/UserModel';
import {FriendsService} from '../../services/friends/friends.service';

@Component({
  selector: 'app-outgoing',
  templateUrl: './outgoing.component.html',
  styleUrls: ['./outgoing.component.css']
})
export class OutgoingComponent implements OnInit {

  @Input()
  friend: UserModel;

  isHidden: boolean;

  constructor(private friendsService: FriendsService) {
  }

  ngOnInit() {
    this.isHidden = false;
  }

  cancel(friendId) {
    this.friendsService.cancelRequest(friendId).subscribe(data => {
      this.isHidden = true;
    }, ({error}) => {
      if (error.message) {
        alert(error.message);
      }
    });
  }
}
