import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserViewsService {
  BASE_URL = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }
  incrementPageViews(articleId: string) {
    return this.http.patch(this.BASE_URL + 'page-view/increment', { articleId: articleId, incrementVisits: false })
  }
  incrementPageViewsAndVisits(articleId: string) {
    return this.http.patch(this.BASE_URL + 'page-view/increment', { articleId: articleId, incrementVisits: true })
  }

}
