import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserViewsService {
  BASE_URL = 'https://blog-project-api.roshith.com/'
  constructor(private http: HttpClient) { }
  incrementPageViews(articleId: string) {
    return this.http.patch(this.BASE_URL + 'page-view/increment', { articleId: articleId, incrementVisits: false })
  }
  incrementPageViewsAndVisits(articleId: string) {
    return this.http.patch(this.BASE_URL + 'page-view/increment', { articleId: articleId, incrementVisits: true })
  }

  getPageViewsCount(articleId: string){
    return this.http.get(this.BASE_URL + `page-view/${articleId}`)
  }

}
