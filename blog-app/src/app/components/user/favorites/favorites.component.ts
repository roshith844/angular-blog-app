import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FavoritesService } from './../../../services/user/interactions/favorites.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteCards: any[] = []
  constructor(private favoritesService: FavoritesService) { }
  ngOnInit(): void {
    this.favoritesService.getFavoriteCards().subscribe((response: any) => {
      this.favoriteCards = response.data
    })
  }
}

