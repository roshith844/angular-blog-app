import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WriterPostManangementService {
  public allBlogs: any[] = []
  BASE_URL = 'https://blog-project-api.roshith.com/writer/'
  constructor(private http: HttpClient) { }
  getBlogs() {
    return this.http.get(this.BASE_URL + 'blog/all')
  }

  addAllBlogs(data: any[]) {
    this.allBlogs = [...data]
  }

  removeBlog(blogId: string) {
    console.log(this.allBlogs)
    this.allBlogs = this.allBlogs.filter(obj => obj._id !== blogId);
  }

  clearUnreadMessagesCount(blogId: string) {
    const POST_TO_MODIFY = this.allBlogs.find(post => post._id === blogId)
    if (POST_TO_MODIFY) {
      POST_TO_MODIFY.unread = []
    }
  }
}
