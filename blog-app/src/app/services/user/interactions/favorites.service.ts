import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  BASE_URL = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }
  addToFavorites(token: string, articleId: string) {
    return this.http.patch(this.BASE_URL + 'favorites/add', { articleId: articleId }, { headers: { 'authorization': token } })
  }

  getFavoriteCards(token: string) {
    return this.http.get(this.BASE_URL + 'favorites/get/cards', { headers: { 'authorization': token } })
  }
}