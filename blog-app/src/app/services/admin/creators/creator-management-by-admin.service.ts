import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatorManagementByAdminService {
  BASE_URL = 'http://localhost:3000/admin/creator/'

  constructor(private http: HttpClient) { }

  getAllCreators(): Observable<object> {
    return this.http.get(this.BASE_URL + 'all')
  }

  dismissCreator(userId: string){
             return this.http.patch(this.BASE_URL + 'dismiss', {userId: userId} )
  }

}
