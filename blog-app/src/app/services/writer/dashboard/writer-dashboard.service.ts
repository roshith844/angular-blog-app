import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriterDashboardService {
  BASE_URL = 'http://localhost:3000/writer/dashboard'

  constructor(private http: HttpClient) { }
  getStatistics() {
    return this.http.get(this.BASE_URL + '/')
  }


}
