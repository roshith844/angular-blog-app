import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './components/pages/user/user-page/user-page.component';
import { WriterDashboardComponent } from './components/pages/writer/writer-dashboard/writer-dashboard.component';
import { BlogContentComponent } from './components/user/blog-content/blog-content.component';
import { FavoritesComponent } from './components/user/favorites/favorites.component';
import { HomePageContentComponent } from './components/user/home-page-content/home-page-content.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';

const routes: Routes = [
  {
    path: '', component: UserPageComponent, children: [
      { path: '', component: HomePageContentComponent },
      { path: 'login', component: UserLoginComponent },
      { path: 'signup', component: UserSignupComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'blog/:slug', component: BlogContentComponent },
      { path: 'favorites', component: FavoritesComponent }
    ]
  },
  {
    path: 'writer', component: WriterDashboardComponent, children: [

    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
