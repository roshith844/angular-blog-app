import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  BASE_URL = 'https://blog-project-api.roshith.com/'
  constructor(private http: HttpClient) { }
  addComment(blogId: string, comment: string) {
    return this.http.post(this.BASE_URL + 'blog/comments/add', { blogId: blogId, comment: comment })
  }

  getComment(blogId: string) {
    return this.http.get(this.BASE_URL + 'blog/comments/get/' + blogId)
  }

  deleteComment(blogId: string, commentId: string) {
    return this.http.delete(`${this.BASE_URL}blog/comments/blogId/${blogId}/comment/${commentId}`)
  }
}
