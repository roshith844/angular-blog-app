import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserManagementByAdminService } from 'src/app/services/admin/users/user-management-by-admin.service';

@Component({
  selector: 'app-user-management-by-admin',
  templateUrl: './user-management-by-admin.component.html',
  styleUrls: ['./user-management-by-admin.component.css']
})
export class UserManagementByAdminComponent implements OnInit {
  users: any[] = []
  constructor(private userManagementByAdminService: UserManagementByAdminService,
    private toastr: ToastrService) { }
  ngOnInit(): void {
    this.userManagementByAdminService.getAllUsers().subscribe((response: any) => {
      this.users = response.data
    })
  }

  blockUser(userId: string) {
    if (!confirm("Are you sure you want to Block this user?")) return
    this.userManagementByAdminService.blockUser(userId).subscribe((response: any) => {
      console.log(response)
      if (response.success == true) {
        const element = this.users.find(item => item._id === userId)
        if (element) {
          element.status = 'blocked';
        }
        this.showSuccess('User Blocked Successfully', '')
      }else{
        this.showFailure()
      }
    })
  }

  unBlockUser(userId: string) {
    if (!confirm("Are you sure you want to Unblock this User?")) return
    this.userManagementByAdminService.unBlockUser(userId).subscribe((response: any) => {
      if (response.success == true) {
        const element = this.users.find(item => item._id === userId)
        if (element) {
          element.status = 'active';
        }
        this.showSuccess('User Unblocked Successfully', '')
      }else{
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