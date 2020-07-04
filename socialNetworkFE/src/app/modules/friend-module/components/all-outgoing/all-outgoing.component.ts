import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {UserModel} from '../../../../models/UserModel';
import {FriendsService} from '../../services/friends/friends.service';

@Component({
  selector: 'app-all-outgoing',
  templateUrl: './all-outgoing.component.html',
  styleUrls: ['./all-outgoing.component.css']
})
export class AllOutgoingComponent implements OnInit {

  @Input()
  friends: UserModel[];

  constructor(private activatedRoute: ActivatedRoute, private friendsService: FriendsService) {
    this.friendsService.getOutgoing().subscribe(data => this.friends = data);
  }


  ngOnInit(): void {
  }

}
