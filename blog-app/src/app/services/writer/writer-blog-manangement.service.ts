import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WriterPostManangementService {
  public allBlogs: any[] = []
  BASE_URL = `${ environment.apiBaseUrl}/writer` 

  constructor(private http: HttpClient) { }
  getBlogs() {
    return this.http.get(this.BASE_URL + '/blog/all')
  }

  addAllBlogs(data: any[]) {
    this.allBlogs = [...data]
  }

  removeBlog(blogId: string) {
    this.allBlogs = this.allBlogs.filter(obj => obj._id !== blogId);
  }

  clearUnreadMessagesCount(blogId: string) {
    const POST_TO_MODIFY = this.allBlogs.find(post => post._id === blogId)
    if (POST_TO_MODIFY) {
      POST_TO_MODIFY.unread = []
    }
  }
}
