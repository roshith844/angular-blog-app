import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contentFormData } from 'src/app/types/formData';

@Injectable({
  providedIn: 'root'
})
export class UpdateBlogService {
  BASE_URL = 'https://blog-project-api.roshith.com/'
  constructor(private http: HttpClient) { }
  updateBlog(data: contentFormData) {
    return this.http.patch(`${this.BASE_URL}writer/blog/update`, data)
  }
}
