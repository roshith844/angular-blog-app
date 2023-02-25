import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  BASE_URL =  'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  getAccessToken(){
    return localStorage.getItem('accessToken')
  }
}
