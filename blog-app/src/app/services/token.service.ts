import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  BASE_URL =  'https://blog-project-api.roshith.com/'
  constructor(private http: HttpClient) { }

  getAccessToken(){
    return localStorage.getItem('accessToken')
  }
}
