import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  public name = 'unknown';
  public profilePictureUrl = '';
  public userId = '';
  BASE_URL = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}
  getUserDetails() {
    return this.http.get(this.BASE_URL + '/user-details');
  }

  modifyNameOfUser(name: string) {
    this.name = name;
  }

  modifyProfilePictureOfUser(ProfilePictureUrl: string) {
    this.profilePictureUrl = ProfilePictureUrl;
  }

  modifyIdOfUser(userId: string) {
    this.userId = userId;
  }

  getIdOfUser() {
    return this.userId;
  }

  getProfilePictureOfUser() {
    return this.profilePictureUrl;
  }

  getNameOfUser() {
    return this.name;
  }
}
