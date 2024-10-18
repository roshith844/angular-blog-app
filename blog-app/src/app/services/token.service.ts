import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  BASE_URL =  environment.apiBaseUrl
  constructor(private http: HttpClient) { }

  getAccessToken(){
    return localStorage.getItem('accessToken')
  }
}
