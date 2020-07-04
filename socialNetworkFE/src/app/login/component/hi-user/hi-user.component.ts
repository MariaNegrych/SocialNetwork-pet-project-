import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hi-user',
  templateUrl: './hi-user.component.html',
  styleUrls: ['./hi-user.component.css']
})
export class HiUserComponent {

  constructor(private router: Router) {
  };

  onShowUsers() {
    this.router.navigateByUrl(`user/users`);
  }

  onShowFriends() {
    this.router.navigateByUrl(`user/friends`);
  }
}
