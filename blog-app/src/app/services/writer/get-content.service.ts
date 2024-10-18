import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contentFormData } from 'src/app/types/formData';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetContentService {
  BASE_URL = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  getBlog(articleId: string) {
    return this.http.get(`${this.BASE_URL}/writer/blog/get/${articleId}`)
  }

}
