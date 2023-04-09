import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type formData } from './../../types/formData'

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  public isLoggedIn: boolean = false

BASE_URL =  'https://blog-project-api.roshith.com/'
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

  isTokenExists(){
    return (localStorage.getItem('accessToken')) ? true: false
  }
}
