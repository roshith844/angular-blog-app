import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { JwtTokenInterceptorService } from './services/interceptors/jwt-token-interceptor.service';
import { UserPageComponent } from './components/pages/user/user-page/user-page.component';
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
import { UserAuthGuard } from './guards/user/user-auth.guard';
import { WriterAuthGuard } from './guards/writer/writer-auth.guard';
import { AdminAuthGuard } from './guards/admin/admin-auth.guard';
import { WriterPageComponent } from './components/pages/writer/writer-page/writer-page.component';
import { WriterDashboardComponent } from './components/writer/writer-dashboard/writer-dashboard.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { AdminEditProfileComponent } from './components/admin/admin-edit-profile/admin-edit-profile.component';
import { DataTablesModule } from 'angular-datatables';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { ViewBlogComponent } from './components/admin/view-blog/view-blog.component';
import { WriterAdminChatComponent } from './components/writer/writer-admin-chat/writer-admin-chat.component';
import { AdminWriterChatComponent } from './components/admin/admin-writer-chat/admin-writer-chat.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

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
    CreatorManagementByAdminComponent,
    WriterPageComponent,
    AdminProfileComponent,
    AdminEditProfileComponent,
    ViewBlogComponent,
    WriterAdminChatComponent,
    AdminWriterChatComponent,
    PageNotFoundComponent,

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
    StoreModule.forRoot({}, {}),
    FormsModule,
    DataTablesModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtTokenInterceptorService,
    multi: true
  }, UserAuthGuard, WriterAuthGuard, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
