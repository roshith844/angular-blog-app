import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { signupFormData } from 'src/app/types/formData'

@Injectable({
  providedIn: 'root'
})
export class UserSignupService {

  BASE_URL = 'http://localhost:3000/'

  constructor(private http: HttpClient) {

  }
  postSignupFormData(data: signupFormData) {
    return this.http.post(this.BASE_URL + 'signup', data)
  }
}
