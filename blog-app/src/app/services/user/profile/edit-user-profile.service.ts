import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditUserProfileService {
  BASE_URL =  'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  editProfile(data: any){
    return this.http.patch(this.BASE_URL + 'user/profile/edit', data )
  }
}

