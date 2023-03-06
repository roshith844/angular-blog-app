import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WriterPostManangementService {
public allBlogs: any[] = []
BASE_URL =  'http://localhost:3000/writer/'
constructor(private http: HttpClient) { }
getBlogs(){
  return this.http.get(this.BASE_URL + 'blog/all')
}

addAllBlogs(data: any[]){
   this.allBlogs = [...data]
}
}
