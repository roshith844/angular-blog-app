import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriterService {
  public isWriter : boolean = false
  markAsWriter() {
    this.isWriter = true
  }
  markAsNotAWriter() {
    this.isWriter = false
  }

  checkWriterStatus() {
    return this.isWriter
  }

  constructor() { }
}
