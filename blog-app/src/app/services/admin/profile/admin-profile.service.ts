import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminProfileService {

 BASE_URL = `${ environment.apiBaseUrl}/admin/profile`

  constructor(private http: HttpClient) { }


  getProfile() {
    return this.http.get(this.BASE_URL + '/details')
  }

  uploadImage(fileToUpload: any) {
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name)
    return this.http.post(this.BASE_URL + '/upload/profile-image', formData)
  }

  editProfile(data: any) {
    return this.http.patch(this.BASE_URL + '/edit', data)
  }
}
