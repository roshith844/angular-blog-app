import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { formData } from 'src/app/types/formData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminLoginService {
  public isLoggedIn: boolean = false;
  BASE_URL = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  loginAdmin(formData: formData) {
    return this.http.post(this.BASE_URL + '/admin/login', formData);
  }

  markAsLoggedIn() {
    this.isLoggedIn = true;
  }

  markAsLoggedOut() {
    this.removeCookie('accessToken');
    this.removeCookie('refreshToken');
    this.isLoggedIn = false;
  }

  getLoginStatus() {
    return this.isLoggedIn;
  }

  private removeCookie(cookieName: string): void {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }

  // isTokenExists(){
  //   return (localStorage.getItem('accessToken')) ? true: false
  // }
}
