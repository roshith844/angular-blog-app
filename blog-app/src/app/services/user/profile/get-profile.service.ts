import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetProfileService {
  BASE_URL = environment.apiBaseUrl
  constructor(private http: HttpClient) { }

  getProfile(){
    return this.http.get(this.BASE_URL + '/user/profile/details' )
  }
}
