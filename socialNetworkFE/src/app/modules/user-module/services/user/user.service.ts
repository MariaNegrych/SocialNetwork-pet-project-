import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {API_BASE_URL} from '../../../../configs';
import {HeadersEnum} from '../../../../constants';
import {UserModel} from '../../../../models/UserModel';
import {AuthService} from '../../../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  accessToken: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient, private authService: AuthService) {
    const {access_token} = this.authService.getTokenPair();
    this.accessToken = access_token;
    this.headers = new HttpHeaders().set(HeadersEnum.AUTHORIZATION, access_token);
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(
      `${API_BASE_URL}/users`, {headers: this.headers});
  }

  sendRequestForFriendship(friendId) {
    return this.http.post<UserModel[]>(
      `${API_BASE_URL}/users/${friendId}/sendRequest`, {}, {headers: this.headers});
  }

  searchUsers(target) {
    return this.http.get<UserModel[]>(`${API_BASE_URL}/users/search?target=${target}`, {headers: this.headers});
  }
}
