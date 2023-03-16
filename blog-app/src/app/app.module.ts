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
import { BlogCommentsComponent } from './components/user/blog-comments/blog-comments.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminPageComponent } from './components/pages/admin/admin-page/admin-page.component';
import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PostsManagementByAdminComponent } from './components/admin/posts-management-by-admin/posts-management-by-admin.component';
import { CommentManagementByAdminComponent } from './components/admin/comment-management-by-admin/comment-management-by-admin.component';
import { UserManagementByAdminComponent } from './components/admin/user-management-by-admin/user-management-by-admin.component';
import { CreatorManagementByAdminComponent } from './components/admin/creator-management-by-admin/creator-management-by-admin.component'

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
    EditBlogComponent,
    BlogCommentsComponent,
    AdminLoginComponent,
    AdminPageComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    PostsManagementByAdminComponent,
    CommentManagementByAdminComponent,
    UserManagementByAdminComponent,
    CreatorManagementByAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
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
