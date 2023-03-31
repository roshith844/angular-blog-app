import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementByAdminService {
  BASE_URL = 'https://blog-project-api.roshith.com/admin/user/'
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.BASE_URL + 'all')
  }

  blockUser(userId: string) {
    return this.http.patch(this.BASE_URL + 'block', { userId: userId })
  }

  unBlockUser(userId: string){
    return this.http.patch(this.BASE_URL + 'unblock', { userId: userId })
  }

}
