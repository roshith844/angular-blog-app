import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminPostManagementService } from 'src/app/services/admin/posts/admin-post-management.service';

@Component({
  selector: 'app-posts-management-by-admin',
  templateUrl: './posts-management-by-admin.component.html',
  styleUrls: ['./posts-management-by-admin.component.css']
})
export class PostsManagementByAdminComponent implements OnInit {
  posts!: any[]
  constructor(private adminPostManagementService: AdminPostManagementService) { }

  ngOnInit(): void {
    this.adminPostManagementService.getAllPosts().subscribe((response: any) => {
      this.posts = response.data
    })
  }

  approveBlog(postId: string) {
    this.adminPostManagementService.approveBlog(postId).subscribe((response: any) => {
      if (response.success === true) {
        const element = this.posts.find(item => item._id === postId);
        if (element) {
          element.status = 'published';
        }
      }
    })

  }

  rejectBlog(postId: string) {
    this.adminPostManagementService.rejectBlog(postId).subscribe((response: any) => {
      if (response.success === true) {
        const element = this.posts.find(item => item._id === postId);
        if (element) {
          element.status = 'rejected';
        }
      }
    })
  }
}
