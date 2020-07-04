import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../../../models/UserModel";
import {ActivatedRoute} from "@angular/router";
import {FriendsService} from "../../services/friends/friends.service";

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  // incoming: UserModel[];
  outgoing: UserModel[];


  constructor(private activatedRoute: ActivatedRoute, private friendsService: FriendsService) {
    this.friendsService.getOutgoing().subscribe(data => {
      this.outgoing = data as UserModel[];
    });
  }

  ngOnInit(): void {
  }

}
