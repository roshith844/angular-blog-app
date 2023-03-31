import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
BASE_URL =  'https://blog-project-api.roshith.com/'
constructor(private http: HttpClient) { }
getBlogCardContent(){
  return this.http.get(this.BASE_URL + 'blog/cards')
}

getBlogContent(param : string){
  return this.http.get(this.BASE_URL + 'blog/'+ param)
}

}
