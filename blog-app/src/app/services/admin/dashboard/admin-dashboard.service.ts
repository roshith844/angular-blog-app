import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  BASE_URL = 'http://localhost:3000/admin/dashboard'

  constructor(private http: HttpClient) { }
  getStatistics() {
    return this.http.get(this.BASE_URL + '/')
  }
}
