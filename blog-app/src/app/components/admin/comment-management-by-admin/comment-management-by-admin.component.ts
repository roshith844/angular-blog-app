import { Component, OnInit } from '@angular/core';
import { AdminCommentManagementService } from 'src/app/services/admin/comments/admin-comment-management.service';
import { UserManagementByAdminService } from 'src/app/services/admin/users/user-management-by-admin.service';

@Component({
  selector: 'app-comment-management-by-admin',
  templateUrl: './comment-management-by-admin.component.html',
  styleUrls: ['./comment-management-by-admin.component.css']
})
export class CommentManagementByAdminComponent implements OnInit {
  comments: any[] = []
  constructor(private adminCommentManagementService: AdminCommentManagementService, private userManagementByAdminService: UserManagementByAdminService) { }
  ngOnInit(): void {
    this.adminCommentManagementService.getAllComments().subscribe((response: any) => {
      console.log(response)
      this.comments = response.data
    })
  }

  blockUser(userId: string) {
    this.userManagementByAdminService.blockUser(userId).subscribe((response: any) => {
      if (response.success === true) {

        for (var i = 0; i < this.comments.length; i++) {
          if (this.comments[i].user_details._id === userId) {
            this.comments[i].user_details.status = 'blocked'
          }
        }

      }
    })
  }

  removeComment(blogId: string, commentId: string) {
    this.adminCommentManagementService.removeComment(blogId, commentId).subscribe((response: any) => {
      if (response.success === true) {
        this.comments = this.comments.filter(function (obj) {
          return obj.comments._id !== commentId;
        });
      }
    })
  }
}
