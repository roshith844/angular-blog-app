import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriterService {
  public isWriter : boolean = false
  constructor(private http: HttpClient) { }
  markAsWriter() {
    this.isWriter = true
  }
  markAsNotAWriter() {
    this.isWriter = false
  }

  checkWriterStatus() {
    return this.isWriter
  }



}
