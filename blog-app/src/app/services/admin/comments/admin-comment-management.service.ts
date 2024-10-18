import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminCommentManagementService {

  BASE_URL = `${ environment.apiBaseUrl}/admin/comment/` 
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
