import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
BASE_URL =  environment.apiBaseUrl
constructor(private http: HttpClient) { }
getBlogCardContent(){
  return this.http.get(this.BASE_URL + '/blog/cards')
}

getBlogContent(param : string){
  return this.http.get(this.BASE_URL + '/blog/'+ param)
}

}
