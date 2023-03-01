import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { FavoritesService } from 'src/app/services/user/interactions/favorites.service';
import { UserViewsService } from 'src/app/services/user/statistics/user-views.service';
import { UserLoginService } from 'src/app/services/user/user-login.service';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {
  articleId = ''
  data!: { _id: string, slug: string, title: string, content: string, author: string }
  slug = ''
  pageViews: number = 0
  isFavorite: boolean = false
  constructor(private viewsService: UserViewsService, private activatedRoute: ActivatedRoute, private contentService: ContentService, public loginService: UserLoginService, private favoritesService: FavoritesService) {

  }

  ngOnInit(): void {
    // Gets param
    const PARAM = this.activatedRoute.snapshot.paramMap.get('slug')
    if (PARAM == null) return
    this.slug = PARAM

    this.contentService.getBlogContent(PARAM).subscribe((response: any) => {
      console.log("..........................")
      console.log(response)
      this.data = response.data
      this.articleId = response.data._id
      this.isFavorite = response.data.isFavorite
     

      // views and Visits
      if (sessionStorage.getItem('visit') === null) {
        this.viewsService.incrementPageViewsAndVisits(this.articleId).subscribe((res) => {
          console.log(res)
        })
      } else {
        this.viewsService.incrementPageViews(this.articleId).subscribe((res) => {
          console.log(res)
        })
      }
      sessionStorage.setItem('visit', 'x')

      // get pageViews
      this.viewsService.getPageViewsCount(this.articleId).subscribe((pageViewsResponse: any) => {
        this.pageViews = pageViewsResponse.views
      })
    })

    const ACCESS_TOKEN = localStorage.getItem('accessToken')
    const REFRESH_TOKEN = localStorage.getItem('refreshToken')
    if (ACCESS_TOKEN != null && REFRESH_TOKEN != null) {
      this.loginService.markAsLoggedIn()
    }

  }

  addToFavorites() {
    const ACCESS_TOKEN = localStorage.getItem('accessToken')
    if (ACCESS_TOKEN != null) {
      this.favoritesService.addOrRemoveFromFavorites(this.articleId).subscribe((response: any) => {
        console.log(response)
        if (response.status == 'add') {
          this.isFavorite = true
        }
        if (response.status == 'remove') {
          this.isFavorite = false
        }
      })
    }

  }

}
