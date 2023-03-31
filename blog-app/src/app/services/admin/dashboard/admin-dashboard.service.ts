import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  BASE_URL = 'https://blog-project-api.roshith.com/admin/dashboard'

  constructor(private http: HttpClient) { }
  getStatistics() {
    return this.http.get(this.BASE_URL )
  }
}
