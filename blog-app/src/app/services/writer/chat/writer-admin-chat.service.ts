import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WriterAdminChatService {
  BASE_URL = `${ environment.apiBaseUrl}/writer` 

  constructor(private http: HttpClient) { }

  postMessage(blogId: string, message: string, author: string) {
    return this.http.post(this.BASE_URL + '/chat', { blogId: blogId, message: message, author: author })
  }

  getChatMessages(blogId: string) {
    return this.http.get(this.BASE_URL + '/chat/' + blogId)
  }
  
  markAsRead(blogId: string) {
    return this.http.patch(this.BASE_URL + '/chat/read', { blogId: blogId })
  }

  
}
