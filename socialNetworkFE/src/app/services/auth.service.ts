import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HeadersEnum} from '../constants';
import {API_BASE_URL} from '../configs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(user) {
    return this.http.post(
      `${API_BASE_URL}/auth`,
      {email: user.email, password: user.password}
    );
  }

  setTokenPair({access_token, refresh_token}) {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
  }

  getTokenPair() {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    return {access_token: accessToken, refresh_token: refreshToken};
  }

  refreshToken() {
    const {refresh_token: refreshToken} = this.getTokenPair();
    const headers = new HttpHeaders().set(HeadersEnum.AUTHORIZATION, refreshToken);

    return this.http.post(`${API_BASE_URL}/auth/refresh`, {}, {headers});
  }
}

