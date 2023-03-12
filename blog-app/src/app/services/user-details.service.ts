import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  public name = 'unknown'
  BASE_URL = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }
  getUserDetails() {
    return this.http.get(this.BASE_URL + 'user-details')
  }

  modifyNameOfUser(name: string){
    this.name = name
  }

  getNameOfUser(){
    return this.name
  }

 
}
