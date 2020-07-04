import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenPair} from '../../../models/TokenPair';
import {LoginInterface} from '../../../models/Login';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  login(loginForm: LoginInterface) {
    this.authService.login(loginForm).subscribe((data: TokenPair) => {

      if (data) {
        this.authService.setTokenPair(data);
        this.router.navigateByUrl(`/user`);
      }
    }, error => alert('Wrong email or password!'));
  }

}

