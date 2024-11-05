import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from '../components/pages/admin/admin-page/admin-page.component';
import { AdminDashboardComponent } from '../components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from '../components/admin/admin-login/admin-login.component';
import { PostsManagementByAdminComponent } from '../components/admin/posts-management-by-admin/posts-management-by-admin.component';
import { CommentManagementByAdminComponent } from '../components/admin/comment-management-by-admin/comment-management-by-admin.component';
import { UserManagementByAdminComponent } from '../components/admin/user-management-by-admin/user-management-by-admin.component';
import { CreatorManagementByAdminComponent } from '../components/admin/creator-management-by-admin/creator-management-by-admin.component';
import { AdminProfileComponent } from '../components/admin/admin-profile/admin-profile.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtTokenInterceptorService } from '../services/interceptors/jwt-token-interceptor.service';
import { UserAuthGuard } from '../guards/user/user-auth.guard';
import { WriterAuthGuard } from '../guards/writer/writer-auth.guard';
import { AdminAuthGuard } from '../guards/admin/admin-auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { AdminEditProfileComponent } from '../components/admin/admin-edit-profile/admin-edit-profile.component';
import { AdminNavbarComponent } from '../components/admin/admin-navbar/admin-navbar.component';
import { ViewBlogComponent } from '../components/admin/view-blog/view-blog.component';
import { SharedModule } from '../shared/shared.module';
import { AdminWriterChatComponent } from '../components/admin/admin-writer-chat/admin-writer-chat.component';


@NgModule({
  declarations: [
    AdminPageComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    PostsManagementByAdminComponent ,
    CommentManagementByAdminComponent,
    UserManagementByAdminComponent ,
    CreatorManagementByAdminComponent,
    AdminProfileComponent,
    AdminEditProfileComponent,
    AdminNavbarComponent,
    AdminWriterChatComponent
  ],
  imports: [
    SharedModule, 
    CommonModule,
    AdminRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    FormsModule,
    DataTablesModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptorService,
      multi: true
    }, UserAuthGuard, WriterAuthGuard, AdminAuthGuard
  ]
})
export class AdminModule { }
