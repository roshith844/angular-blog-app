import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AdminCommentManagementService } from 'src/app/services/admin/comments/admin-comment-management.service';
import { UserManagementByAdminService } from 'src/app/services/admin/users/user-management-by-admin.service';

@Component({
  selector: 'app-comment-management-by-admin',
  templateUrl: './comment-management-by-admin.component.html',
  styleUrls: ['./comment-management-by-admin.component.css']
})
export class CommentManagementByAdminComponent implements OnInit {
  comments: any[] = []
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>()
  constructor(private adminCommentManagementService: AdminCommentManagementService,
     private userManagementByAdminService: UserManagementByAdminService,
    private toastr: ToastrService ) { }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
     };
    this.adminCommentManagementService.getAllComments().subscribe((response: any) => {
      this.comments = response.data
      this.dtTrigger.next(null)
    })
  }

  blockUser(userId: string) {
    if (!confirm("Are you sure you want to Block this user?")) return
    this.userManagementByAdminService.blockUser(userId).subscribe((response: any) => {
      if (response.success === true) {
        for (var i = 0; i < this.comments.length; i++) {
          if (this.comments[i].user_details._id === userId) {
            this.comments[i].user_details.status = 'blocked'
          }
        }
        this.showSuccess('User Blocked', '')
      } else {
        this.showFailure()
      }
    })
  }

  removeComment(blogId: string, commentId: string) {
    if (!confirm("Are you sure you want to Remove this Comment?")) return
    this.adminCommentManagementService.removeComment(blogId, commentId).subscribe((response: any) => {
      if (response.success === true) {
        this.comments = this.comments.filter(function (obj) {
          return obj.comments._id !== commentId
        })
        this.showSuccess('Comment Removed', '')
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