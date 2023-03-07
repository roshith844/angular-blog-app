import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contentFormData } from 'src/app/types/formData';

@Injectable({
  providedIn: 'root'
})
export class DeleteBlogService {
  BASE_URL = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }
  deleteBlog(articleId: string) {
    return this.http.delete(`${this.BASE_URL}writer/blog/delete/${articleId}`)
  }
}
