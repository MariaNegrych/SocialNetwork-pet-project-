import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {UserModel} from '../../../../models/UserModel';
import {FriendsService} from '../../services/friends/friends.service';

@Component({
  selector: 'app-all-incoming',
  templateUrl: './all-incoming.component.html',
  styleUrls: ['./all-incoming.component.css']
})
export class AllIncomingComponent implements OnInit {

  friends: UserModel[];

  constructor(private activatedRoute: ActivatedRoute, private friendsService: FriendsService) {
    this.friendsService.getIncoming().subscribe(data => {
      this.friends = data;
    }, ({error}) => {
      if (error.message) {
        alert(error.message);
      }
    });
  }

  ngOnInit(): void {
  }

}
