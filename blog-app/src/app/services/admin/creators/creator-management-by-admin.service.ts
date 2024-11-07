import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreatorManagementByAdminService {
  BASE_URL = `${environment.apiBaseUrl}/admin/creator/`

  constructor(private http: HttpClient) { }

  getAllCreators(): Observable<object> {
    return this.http.get(this.BASE_URL + 'all')
  }

  dismissCreator(userId: string) {
    return this.http.patch(this.BASE_URL + 'dismiss', { userId: userId })
  }

}
