import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { formData } from 'src/app/types/formData';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  public isLoggedIn: boolean = false
  BASE_URL =  environment.apiBaseUrl
  constructor(private http: HttpClient) { }

  loginAdmin(formData: formData) {
    return this.http.post(this.BASE_URL + '/admin/login', formData)
  }

  markAsLoggedIn() {
    this.isLoggedIn = true
  }

  markAsLoggedOut() {
    this.isLoggedIn = false
  }

  getLoginStatus() {
    return this.isLoggedIn
  }

  isTokenExists(){
    return (localStorage.getItem('accessToken')) ? true: false
  }
}
