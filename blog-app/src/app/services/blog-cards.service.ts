import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogCardsService {
  public blogCards: any[] = []

  constructor() { }

  addBlogCards(cards: any[]) {
    this.blogCards = [...cards]
  }

  addToFavorites(articleId: string) {
    this.blogCards.forEach((item) => {
      if (item._id === articleId) {
        item.isFavorite = true
      }
    })
  }

  removeFromFavorites(articleId: string) {
    this.blogCards.forEach((item) => {
      if (item._id === articleId) {
        item.isFavorite = false
      }
    })
  }
}
