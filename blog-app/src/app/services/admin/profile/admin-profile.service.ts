import { HttpClient, HttpBackend } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminProfileService {

  BASE_URL = 'http://localhost:3000/'

  private httpClient: HttpClient;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler)
  }


  getProfile(TOKEN: string) {
    return this.httpClient.get(this.BASE_URL + 'admin/profile/details', {
      headers: {
        'Authorization': TOKEN
      }
    })
  }

  uploadImage(fileToUpload: any, TOKEN: string) {
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name)
    return this.httpClient.post(this.BASE_URL + 'admin/profile/upload/profile-image', formData, {
      headers: {
        'Authorization': TOKEN
      }
    })
  }

  editProfile(data: any, TOKEN: string) {
    return this.httpClient.patch(this.BASE_URL + 'admin/profile/edit', data, {
      headers: {
        'Authorization': TOKEN
      }
    })
  }
}
