import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from '../../../../models/UserModel';
import {FormBuilder, FormGroup} from '@angular/forms';

import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-all-albums',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  form: FormGroup;
  users: UserModel[] = [];

  constructor(private activatedRoute: ActivatedRoute, private  formBuilder: FormBuilder, private userService: UserService) {
    this.activatedRoute.data.subscribe(({allUsers}) => {
      this.users = allUsers;
    });

    this.form = formBuilder.group({
      search: ''
    });
  }

  searchUsers() {
    const target = this.form.value.search;


    this.userService.searchUsers(target).subscribe(data => {
      this.users = data;
    }, error => {
      if (error.message) {
        alert(error.message);
      }
    });
  }

}
