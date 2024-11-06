import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  BASE_URL = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  refreshToken() {
    return this.http
      .post(`${this.BASE_URL}/refresh-token`, {})
      .pipe
      // tap((response) => {
      //   console.log('refrshed')
      //   // this.setAccessToken(response.accessToken);
      // })
      ();
  }

  logout() {
    console.log('logged out');
  }
}
