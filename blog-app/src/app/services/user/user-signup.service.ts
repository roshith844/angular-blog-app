import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { formData } from 'src/app/types/formData'

@Injectable({
  providedIn: 'root'
})
export class UserSignupService {

  BASE_URL = 'http://localhost:3000/'

  constructor(private http: HttpClient) {

  }
  postSignupFormData(data: formData) {
    return this.http.post(this.BASE_URL + 'signup', data)
  }
}
