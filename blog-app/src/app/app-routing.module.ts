import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { CommentManagementByAdminComponent } from './components/admin/comment-management-by-admin/comment-management-by-admin.component';
import { CreatorManagementByAdminComponent } from './components/admin/creator-management-by-admin/creator-management-by-admin.component';
import { PostsManagementByAdminComponent } from './components/admin/posts-management-by-admin/posts-management-by-admin.component';
import { UserManagementByAdminComponent } from './components/admin/user-management-by-admin/user-management-by-admin.component';
import { AdminPageComponent } from './components/pages/admin/admin-page/admin-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { UserPageComponent } from './components/pages/user/user-page/user-page.component';
// import { WriterDashboardComponent } from './components/pages/writer/writer-dashboard/writer-dashboard.component';
import { WriterPageComponent } from './components/pages/writer/writer-page/writer-page.component';
import { BlogContentComponent } from './components/user/blog-content/blog-content.component';
import { FavoritesComponent } from './components/user/favorites/favorites.component';
import { HomePageContentComponent } from './components/user/home-page-content/home-page-content.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
import { CreateContentComponent } from './components/writer/create-content/create-content.component';
import { EditBlogComponent } from './components/writer/edit-blog/edit-blog.component';
import { PostsManagementComponent } from './components/writer/posts-management/posts-management.component';
import { WriterDashboardComponent } from './components/writer/writer-dashboard/writer-dashboard.component';
import { AdminAuthGuard } from './guards/admin/admin-auth.guard';
import { UserAuthGuard } from './guards/user/user-auth.guard';
import { WriterAuthGuard } from './guards/writer/writer-auth.guard';
const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      { path: '', component: HomePageContentComponent },
      { path: 'login', component: UserLoginComponent },
      { path: 'signup', component: UserSignupComponent },
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [UserAuthGuard],
      },
      { path: 'blog/:slug', component: BlogContentComponent },
      {
        path: 'favorites',
        component: FavoritesComponent,
        canActivate: [UserAuthGuard],
      },
    ],
  },
  {
    path: 'writer',
    component: WriterPageComponent,
    children: [
      {
        path: '',
        component: WriterDashboardComponent,
        canActivate: [WriterAuthGuard],
      },
      { path: 'login', component: UserLoginComponent },
      {
        path: 'write',
        component: CreateContentComponent,
        canActivate: [WriterAuthGuard],
      },
      {
        path: 'posts',
        component: PostsManagementComponent,
        canActivate: [WriterAuthGuard],
      },
      {
        path: 'edit/:slug',
        component: EditBlogComponent,
        canActivate: [WriterAuthGuard],
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [WriterAuthGuard],
      },
    ],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
        canActivate: [AdminAuthGuard],
      },
      { path: 'login', component: AdminLoginComponent },
      {
        path: 'posts',
        component: PostsManagementByAdminComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'comments',
        component: CommentManagementByAdminComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'users',
        component: UserManagementByAdminComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'creators',
        component: CreatorManagementByAdminComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'profile',
        component: AdminProfileComponent,
        canActivate: [AdminAuthGuard],
      },
    ],

    // loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), // Lazy loading AdminModule
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
