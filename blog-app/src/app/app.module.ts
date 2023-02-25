import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserNavbarComponent } from './components/user/user-navbar/user-navbar.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { HomePageContentComponent } from './components/user/home-page-content/home-page-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { BlogContentComponent } from './components/user/blog-content/blog-content.component';
import { FavoritesComponent } from './components/user/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNavbarComponent,
    HomePageComponent,
    UserLoginComponent,
    HomePageContentComponent,
    UserSignupComponent,
    UserProfileComponent,
    BlogContentComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
