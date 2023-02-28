import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BecomeWriterRequestService {
  BASE_URL = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }
  applyForWriterRole() {
    return this.http.patch(this.BASE_URL + 'writer/apply', {})
  }
}
