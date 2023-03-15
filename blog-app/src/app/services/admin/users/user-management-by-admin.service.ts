import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementByAdminService {
  BASE_URL = 'http://localhost:3000/admin/user/'
  constructor(private http: HttpClient) { }
  blockUser(userId: string) {
    return this.http.patch(this.BASE_URL + 'block', {userId: userId} )
  }

}
