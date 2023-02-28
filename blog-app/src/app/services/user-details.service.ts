import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  BASE_URL = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }
  getUserDetails() {
    return this.http.get(this.BASE_URL + 'user-details')
  }
}
