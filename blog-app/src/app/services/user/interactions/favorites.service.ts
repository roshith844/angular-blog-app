import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  BASE_URL = 'https://blog-project-api.roshith.com/'
  constructor(private http: HttpClient) { }
  addOrRemoveFromFavorites( articleId: string) {
    return this.http.patch(this.BASE_URL + 'favorites/add-or-remove', { articleId: articleId })
  }

  getFavoriteCards() {
    return this.http.get(this.BASE_URL + 'favorites/get/cards')
  }
}