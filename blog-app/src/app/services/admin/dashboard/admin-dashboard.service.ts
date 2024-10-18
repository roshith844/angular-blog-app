import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  BASE_URL = `${ environment.apiBaseUrl}/admin/dashboard` 

  constructor(private http: HttpClient) { }
  getStatistics() {
    return this.http.get(this.BASE_URL )
  }
}
