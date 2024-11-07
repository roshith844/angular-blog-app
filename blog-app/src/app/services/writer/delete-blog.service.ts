import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
