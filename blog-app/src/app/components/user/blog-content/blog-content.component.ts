import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { FavoritesService } from 'src/app/services/user/interactions/favorites.service';
import { UserLoginService } from 'src/app/services/user/user-login.service';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {
  data!: { slug: string, title: string, content: string, author: string }
  slug = ''
  constructor(private activatedRoute: ActivatedRoute, private contentService: ContentService, public loginService: UserLoginService, private favoritesService: FavoritesService) {

  }

  ngOnInit(): void {
    const PARAM = this.activatedRoute.snapshot.paramMap.get('slug')
    if (PARAM != null) {
      this.slug = PARAM
      this.contentService.getBlogContent(PARAM).subscribe((response: any) => {
        console.log(response)
        this.data = response.data
      })
    }
    const ACCESS_TOKEN = localStorage.getItem('accessToken')
    const REFRESH_TOKEN = localStorage.getItem('refreshToken')
    if (ACCESS_TOKEN != null && REFRESH_TOKEN != null) {
      this.loginService.markAsLoggedIn()
    }
  }

  addToFavorites() {
    const ACCESS_TOKEN = localStorage.getItem('accessToken')
    if (ACCESS_TOKEN != null) {
      this.favoritesService.addToFavorites(ACCESS_TOKEN).subscribe((response: any) => {
        console.log(response)
        if (response.success == true) {
          console.log("added to favorites")
        }
      })
    }

  }

}
