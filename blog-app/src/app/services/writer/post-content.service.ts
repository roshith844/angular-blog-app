import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contentFormData } from 'src/app/types/formData';

@Injectable({
  providedIn: 'root'
})
export class PostContentService {
  BASE_URL =  'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  postContent(content: contentFormData){
    return this.http.post(this.BASE_URL + 'writer/blog/create',content)
  }
}
