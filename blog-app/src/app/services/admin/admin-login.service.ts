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
    this.isLoggedIn = false;
  }

  signOutAdmin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.BASE_URL}/admin/logout`, {}).subscribe({
        next: () => {
          this.isLoggedIn = false;
          resolve(true); // If successful, resolve with true
        },
        error: (err) => {
          resolve(false); // If error occurs, resolve with false
        },
      });
    });
  }

  getLoginStatus() {
    return this.isLoggedIn;
  }

  private removeCookie(
    cookieName: string,
    path: string = '/',
    domain: string = ''
  ): void {
    // Set expiry date to a time in the past
    const cookieString = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; domain=${domain}`;
    document.cookie = cookieString;

    // If the cookie was set with the `Secure` flag, ensure that the request is over HTTPS.
    if (window.location.protocol === 'https:') {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; domain=${domain}; Secure; SameSite=None`;
    }
  }

  // isTokenExists(){
  //   return (localStorage.getItem('accessToken')) ? true: false
  // }
}
