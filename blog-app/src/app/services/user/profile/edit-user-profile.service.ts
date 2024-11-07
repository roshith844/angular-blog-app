import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditUserProfileService {
  BASE_URL = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  uploadImage(fileToUpload: any){
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name)
    return this.http.post(this.BASE_URL +'/user/profile/upload/profile-image', formData )
  }

  editProfile(data: any){
    return this.http.patch(this.BASE_URL + '/user/profile/edit', data )
  }
}

