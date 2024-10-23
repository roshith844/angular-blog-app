import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from '../components/pages/admin/admin-page/admin-page.component';
import { AdminDashboardComponent } from '../components/admin/admin-dashboard/admin-dashboard.component';
import { AdminAuthGuard } from '../guards/admin/admin-auth.guard';
import { AdminLoginComponent } from '../components/admin/admin-login/admin-login.component';
import { PostsManagementByAdminComponent } from '../components/admin/posts-management-by-admin/posts-management-by-admin.component';
import { CommentManagementByAdminComponent } from '../components/admin/comment-management-by-admin/comment-management-by-admin.component';
import { UserManagementByAdminComponent } from '../components/admin/user-management-by-admin/user-management-by-admin.component';
import { CreatorManagementByAdminComponent } from '../components/admin/creator-management-by-admin/creator-management-by-admin.component';
import { AdminProfileComponent } from '../components/admin/admin-profile/admin-profile.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      { path: '', component: AdminDashboardComponent, canActivate: [AdminAuthGuard] },
      { path: 'login', component: AdminLoginComponent },
      { path: 'posts', component: PostsManagementByAdminComponent, canActivate: [AdminAuthGuard] },
      { path: 'comments', component: CommentManagementByAdminComponent, canActivate: [AdminAuthGuard] },
      { path: 'users', component: UserManagementByAdminComponent, canActivate: [AdminAuthGuard] },
      { path: 'creators', component: CreatorManagementByAdminComponent, canActivate: [AdminAuthGuard] },
      { path: 'profile', component: AdminProfileComponent, canActivate: [AdminAuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
