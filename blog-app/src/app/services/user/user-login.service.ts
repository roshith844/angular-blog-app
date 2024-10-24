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

  markAsLoggedIn(accessToken: string, refreshToken: string) {
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
    this.isLoggedIn = true;
  }

  markAsLoggedOut() {
    // localStorage.removeItem('accessToken')
    // localStorage.removeItem('refreshToken')
    // this.isLoggedIn = false;
  }

  signOut() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    this.isLoggedIn = false;
  }

  getLoginStatus() {
    return this.isLoggedIn
  }

  isTokenExists() {
    return (localStorage.getItem('accessToken')) ? true : false
  }
}
