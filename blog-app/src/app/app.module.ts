import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserNavbarComponent } from './components/user/user-navbar/user-navbar.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { HomePageContentComponent } from './components/user/home-page-content/home-page-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { BlogContentComponent } from './components/user/blog-content/blog-content.component';
import { FavoritesComponent } from './components/user/favorites/favorites.component';
import { HttpInterceptor } from '@angular/common/http';
import { JwtTokenInterceptorService } from './services/interceptors/jwt-token-interceptor.service';
import { UserPageComponent } from './components/pages/user/user-page/user-page.component';
import { WriterDashboardComponent } from './components/pages/writer/writer-dashboard/writer-dashboard.component';
import { WriterNavbarComponent } from './components/writer/writer-navbar/writer-navbar.component';
import { CreateContentComponent } from './components/writer/create-content/create-content.component';
import { EditorModule } from "@tinymce/tinymce-angular";
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import { StoreModule } from '@ngrx/store';
import { PostsManagementComponent } from './components/writer/posts-management/posts-management.component';
import { EditBlogComponent } from './components/writer/edit-blog/edit-blog.component';
@NgModule({
  declarations: [
    AppComponent,
    UserNavbarComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserProfileComponent,
    BlogContentComponent,
    FavoritesComponent,
    UserPageComponent,
    HomePageContentComponent,
    WriterDashboardComponent,
    WriterNavbarComponent,
    CreateContentComponent,
    EditProfileComponent,
    PostsManagementComponent,
    EditBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtTokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
