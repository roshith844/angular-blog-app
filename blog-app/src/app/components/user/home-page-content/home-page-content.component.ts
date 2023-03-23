import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BlogCardsService } from 'src/app/services/blog-cards.service';
import { ContentService } from 'src/app/services/content.service';
import { FavoritesService } from 'src/app/services/user/interactions/favorites.service';
import { UserLoginService } from 'src/app/services/user/user-login.service';

@Component({
  selector: 'app-home-page-content',
  templateUrl: './home-page-content.component.html',
  styleUrls: ['./home-page-content.component.css']
})
export class HomePageContentComponent implements OnInit {
  constructor(private contentService: ContentService,
    public loginService: UserLoginService,
    private favoritesService: FavoritesService,
    public blogCardsService: BlogCardsService,
    private toastr: ToastrService) { }
  ngOnInit(): void {
    this.contentService.getBlogCardContent().subscribe((response: any) => {
      this.blogCardsService.addBlogCards(response.cards)
    })
  }
  addToFavorites(articleId: string) {
    const ACCESS_TOKEN = localStorage.getItem('accessToken')
    if (ACCESS_TOKEN != null) {
      this.favoritesService.addOrRemoveFromFavorites(articleId).subscribe((response: any) => {
        console.log(response)
        if (response.status == 'add') {
          this.blogCardsService.addToFavorites(articleId)
          this.toastr.success('Added to Favorites')

        }
        if (response.status == 'remove') {
          this.blogCardsService.removeFromFavorites(articleId)
          this.toastr.success('Removed From favorites')
        }
      })
    }
  }

}
