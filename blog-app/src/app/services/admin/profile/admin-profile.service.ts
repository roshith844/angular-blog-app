import { HttpClient, HttpBackend } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminProfileService {

  BASE_URL = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }


  getProfile() {
    return this.http.get(this.BASE_URL + 'admin/profile/details')
  }

  uploadImage(fileToUpload: any) {
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name)
    return this.http.post(this.BASE_URL + 'admin/profile/upload/profile-image', formData)
  }

  editProfile(data: any) {
    return this.http.patch(this.BASE_URL + 'admin/profile/edit', data)
  }
}
