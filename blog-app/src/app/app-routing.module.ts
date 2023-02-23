import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { BlogContentComponent } from './components/user/blog-content/blog-content.component';
import { HomePageContentComponent } from './components/user/home-page-content/home-page-content.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent, children: [
      { path: '', component: HomePageContentComponent },
      { path: 'login', component: UserLoginComponent },
      { path: 'signup', component: UserSignupComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'blog/:slug', component: BlogContentComponent }
    ]
  },
  { path: 'login', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
