import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminPostManagementService {
  BASE_URL = 'http://localhost:3000/admin/post/'
  constructor(private http: HttpClient) { }
  getAllPosts(): Observable<object> {
    return this.http.get(this.BASE_URL + 'all')
  }

  approveBlog(blogId: string) {
    return this.http.patch(this.BASE_URL + 'approve', { blogId: blogId })
  }

  rejectBlog(blogId: string) {
    return this.http.patch(this.BASE_URL + 'reject', { blogId: blogId })
  }

}
