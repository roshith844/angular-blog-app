import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  public name = 'unknown'
  public profilePictureUrl = ''
  BASE_URL = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }
  getUserDetails() {
    return this.http.get(this.BASE_URL + 'user-details')
  }

  modifyNameOfUser(name: string) {
    this.name = name
  }

  modifyProfilePictureOfUser(ProfilePictureUrl: string) {
    this.profilePictureUrl = ProfilePictureUrl
  }

  getProfilePictureOfUser() {
    return this.profilePictureUrl
  }



  getNameOfUser() {
    return this.name
  }


}
