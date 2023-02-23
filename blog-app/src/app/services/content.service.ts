import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
BASE_URL =  'http://localhost:3000/'
constructor(private http: HttpClient) { }
getBlogCardContent(){
  return this.http.get(this.BASE_URL + 'blog/cards')
}

getBlogContent(param : string){
  return this.http.get(this.BASE_URL + 'blog/'+ param)
}

}
