import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetProfileService {
  BASE_URL =  'https://blog-project-api.roshith.com/'
  constructor(private http: HttpClient) { }

  getProfile(){
    return this.http.get(this.BASE_URL + 'user/profile/details' )
  }
}
