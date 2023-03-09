import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditUserProfileService {
  BASE_URL =  'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  uploadImage(formData: any){
   return this.http.post(this.BASE_URL +'user/profile/upload/profile-image', formData,{
    headers: { "content-type": "multipart/form-data" }
})
  }

  editProfile(data: any){
    return this.http.patch(this.BASE_URL + 'user/profile/edit', data )
  }
}

