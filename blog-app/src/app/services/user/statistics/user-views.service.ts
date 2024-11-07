import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserViewsService {
  BASE_URL = environment.apiBaseUrl

  constructor(private http: HttpClient) { }
  incrementPageViews(articleId: string) {
    return this.http.patch(this.BASE_URL + '/page-view/increment', { articleId: articleId, incrementVisits: false })
  }
  incrementPageViewsAndVisits(articleId: string) {
    return this.http.patch(this.BASE_URL + '/page-view/increment', { articleId: articleId, incrementVisits: true })
  }

  getPageViewsCount(articleId: string){
    return this.http.get(this.BASE_URL + `/page-view/${articleId}`)
  }

}
