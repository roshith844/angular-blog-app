import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type formData } from './../../types/formData'
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  public isLoggedIn: boolean = (localStorage.getItem('accessToken')) ? true : false

  BASE_URL = environment.apiBaseUrl

  constructor(private http: HttpClient) { }
  sendLoginFormData(formData: formData) {
    return this.http.post(this.BASE_URL + '/login', formData)
  }

  markAsLoggedIn() {
    (localStorage.getItem('accessToken')) ? true : false
  }

  markAsLoggedOut() {
  localStorage.removeItem('accessToken')
  }

  getLoginStatus() {
    return this.isLoggedIn
  }

  isTokenExists() {
    return (localStorage.getItem('accessToken')) ? true : false
  }
}
