import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contentFormData } from 'src/app/types/formData';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DeleteBlogService {
  BASE_URL = environment.apiBaseUrl
  constructor(private http: HttpClient) { }
  deleteBlog(articleId: string) {
    return this.http.delete(`${this.BASE_URL}/writer/blog/delete/${articleId}`)
  }
}
