import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type formData } from './../../types/formData'

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  isLoggedIn = false
BASE_URL =  'http://localhost:3000/'
  constructor(private http: HttpClient) { }
  sendLoginFormData(formData:formData){
  return this.http.post(this.BASE_URL + 'login', formData)
  }

  markAsLoggedIn(){
   this. isLoggedIn = true
  }

  markAsLoggedOut(){
    this.isLoggedIn = false
   }

  getLoginStatus(){
    return this.isLoggedIn
  }
}
