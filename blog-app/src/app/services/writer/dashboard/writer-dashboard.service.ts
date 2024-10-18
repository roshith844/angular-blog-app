import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WriterDashboardService {
  BASE_URL = `${ environment.apiBaseUrl}/writer/dashboard` 

  constructor(private http: HttpClient) { }
  getStatistics() {
    return this.http.get(this.BASE_URL + '/')
  }


}
