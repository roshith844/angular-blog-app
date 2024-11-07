import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type formData } from './../../types/formData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  public isLoggedIn: boolean = false;

  BASE_URL = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}
  sendLoginFormData(formData: formData) {
    return this.http.post(this.BASE_URL + '/login', formData);
  }

  markAsLoggedIn() {
    this.isLoggedIn = true;
  }

  markAsLoggedOut() {
    this.isLoggedIn = false;
  }

  signOutUser(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.BASE_URL}/logout`, {}).subscribe({
        next: () => {
          this.isLoggedIn = false;
          resolve(true); 
        },
        error: (err) => {
          resolve(false); 
        },
      });
    });
  }

  getLoginStatus() {
    return this.isLoggedIn;
  }
}
