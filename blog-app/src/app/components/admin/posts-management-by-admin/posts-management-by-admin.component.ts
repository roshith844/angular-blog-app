import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AdminPostManagementService } from 'src/app/services/admin/posts/admin-post-management.service';

@Component({
  selector: 'app-posts-management-by-admin',
  templateUrl: './posts-management-by-admin.component.html',
  styleUrls: ['./posts-management-by-admin.component.css']
})
export class PostsManagementByAdminComponent implements OnInit {
  posts!: any[]
  constructor(private adminPostManagementService: AdminPostManagementService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.adminPostManagementService.getAllPosts().subscribe((response: any) => {
      this.posts = response.data
    })
  }

  approveBlog(postId: string) {
    if (!confirm("Are you sure you want to Approve this Blog?")) return
    this.adminPostManagementService.approveBlog(postId).subscribe((response: any) => {
      if (response.success === true) {
        const element = this.posts.find(item => item._id === postId);
        if (element) {
          element.status = 'published';
        }
        this.showSuccess('Blog Approved', 'The blog is published Now')
      } else {
        this.showFailure()
      }
    })

  }

  rejectBlog(postId: string) {
    if (!confirm("Are you sure you want to Reject this Blog?")) return
    this.adminPostManagementService.rejectBlog(postId).subscribe((response: any) => {
      if (response.success === true) {
        const element = this.posts.find(item => item._id === postId)
        if (element) {
          element.status = 'rejected';
        }
        this.showSuccess('blog Rejected Successfully', '')
      } else {
        this.showFailure()
      }
    })
  }

  showSuccess(title: string, description: string) {
    this.toastr.success(title, description)
  }

  showFailure() {
    this.toastr.error('Some went wrong', 'Please Try again!')
  }
}
