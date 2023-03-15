import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCommentManagementService {
  BASE_URL = 'http://localhost:3000/admin/comment/'
  constructor(private http: HttpClient) { }
  getAllComments(): Observable<object> {
    return this.http.get(this.BASE_URL + 'all')
  }

  removeComment(blogId: string, commentId: string) {
    return this.http.patch(this.BASE_URL + 'remove', { blogId: blogId, commentId: commentId })
  }

  // blockUser(userId : string){
  //   return this.http.patch(this.BASE_URL + )
  // }
  // approveBlog(blogId: string) {
  //   return this.http.patch(this.BASE_URL + 'approve', { blogId: blogId })
  // }

  // rejectBlog(blogId: string) {
  //   return this.http.patch(this.BASE_URL + 'reject', { blogId: blogId })
  // }
}
