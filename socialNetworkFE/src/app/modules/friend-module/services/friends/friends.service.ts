import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {API_BASE_URL} from '../../../../configs';
import {UserModel} from '../../../../models/UserModel';
import {HeadersEnum} from '../../../../constants';
import {AuthService} from '../../../../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  accessToken: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient, private authService: AuthService) {
    const {access_token} = this.authService.getTokenPair();
    this.accessToken = access_token;
    this.headers = new HttpHeaders().set(HeadersEnum.AUTHORIZATION, access_token);
  }

  getFriends(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${API_BASE_URL}/users/user/friends`, {headers: this.headers});
  }

  getIncoming(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${API_BASE_URL}/users/user/invites`, {headers: this.headers});
  }

  getOutgoing(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${API_BASE_URL}/users/user/requests`, {headers: this.headers});
  }

  removeFriend(friendId) {
    return this.http.post<UserModel[]>(`${API_BASE_URL}/users/${friendId}/removeFriend`, {}, {headers: this.headers});
  }

  cancelRequest(friendId) {
    return this.http.post<UserModel[]>(`${API_BASE_URL}/users/${friendId}/cancelRequest`, {}, {headers: this.headers});
  }

  acceptIncoming(friendId) {
    return this.http.post<UserModel[]>(`${API_BASE_URL}/users/${friendId}/acceptInvite`, {}, {headers: this.headers});
  }

  ignoreIncoming(friendId) {
    return this.http.post<UserModel[]>(`${API_BASE_URL}/users/${friendId}/declineInvite`, {}, {headers: this.headers});
  }
}

