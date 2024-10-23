import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContentService } from 'src/app/services/content.service';
import { FavoritesService } from 'src/app/services/user/interactions/favorites.service';
import { UserViewsService } from 'src/app/services/user/statistics/user-views.service';
import { UserLoginService } from 'src/app/services/user/user-login.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {

  articleId = ''
  sanitizedHtmlContent!: SafeHtml
  data!: any
  slug = ''
  pageViews: number = 0
  isFavorite: boolean = false
  constructor(private viewsService: UserViewsService,
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService, public loginService: UserLoginService,
    private favoritesService: FavoritesService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    // Gets param
    const PARAM = this.activatedRoute.snapshot.paramMap.get('slug')
    if (PARAM == null) return
    this.slug = PARAM

    this.contentService.getBlogContent(PARAM).subscribe((response: any) => {
      this.data = response.data
      this.articleId = response.data._id
      this.isFavorite = response.isFavorite

      this.sanitizedHtmlContent = this.sanitizer.bypassSecurityTrustHtml(response.data.content);

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
      // this.loginService.markAsLoggedIn()
    }

  }

  addToFavorites() {
    const ACCESS_TOKEN = localStorage.getItem('accessToken')
    if (!ACCESS_TOKEN) this.toastr.error('Some went wrong', 'Please Try again!')
    this.favoritesService.addOrRemoveFromFavorites(this.articleId).subscribe((response: any) => {
      if (response.status == 'add') {
        this.isFavorite = true
        this.showSuccess('Added to Favorites', '')
      } else if (response.status == 'remove') {
        this.isFavorite = false
        this.showSuccess('Removed From Favorites', '')
      } else {
        this.showFailure()
      }
    })

  }

  showSuccess(title: string, description: string) {
    this.toastr.success(title, description)
  }

  showFailure() {
    this.toastr.error('Some went wrong', 'Please Try again!')
  }


}
