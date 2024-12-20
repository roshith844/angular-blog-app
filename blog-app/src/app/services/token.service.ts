import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  BASE_URL = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  refreshToken() {
    return this.http.post(`${this.BASE_URL}/refresh-token`, {}).pipe();
  }
}
