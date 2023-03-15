import { Component, OnInit } from '@angular/core';
import { UserManagementByAdminService } from 'src/app/services/admin/users/user-management-by-admin.service';

@Component({
  selector: 'app-user-management-by-admin',
  templateUrl: './user-management-by-admin.component.html',
  styleUrls: ['./user-management-by-admin.component.css']
})
export class UserManagementByAdminComponent implements OnInit {
  users: any[] = []
  constructor(private userManagementByAdminService: UserManagementByAdminService) { }
  ngOnInit(): void {
    this.userManagementByAdminService.getAllUsers().subscribe((response: any) => {
      this.users = response.data
    })
  }

  blockUser(userId: string) {
    this.userManagementByAdminService.blockUser(userId).subscribe((response: any) => {
      console.log(response)
      if (response.success == true) {
        const element = this.users.find(item => item._id === userId)
        if (element) {
          element.status = 'blocked';
        }
      }
    })
  }

  unBlockUser(userId: string) {
    this.userManagementByAdminService.unBlockUser(userId).subscribe((response: any) => {
      if (response.success == true) {
        const element = this.users.find(item => item._id === userId)
        if (element) {
          element.status = 'active';
        }
      }

    })
  }
}