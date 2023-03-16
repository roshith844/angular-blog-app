import { Component, OnInit } from '@angular/core';
import { CreatorManagementByAdminService } from 'src/app/services/admin/creators/creator-management-by-admin.service';
import { UserManagementByAdminService } from 'src/app/services/admin/users/user-management-by-admin.service';

@Component({
  selector: 'app-creator-management-by-admin',
  templateUrl: './creator-management-by-admin.component.html',
  styleUrls: ['./creator-management-by-admin.component.css']
})
export class CreatorManagementByAdminComponent implements OnInit {
  creators: any[] = []
  constructor(private creatorManagementByAdminService: CreatorManagementByAdminService, private userManagementByAdminService: UserManagementByAdminService) { }
  ngOnInit(): void {
    this.creatorManagementByAdminService.getAllCreators().subscribe((response: any) => {
      console.log(response)
      this.creators = response.data
    })
  }

  blockUser(userId: string) {
    this.userManagementByAdminService.blockUser(userId).subscribe((response: any) => {
      if (response.success == true) {
        const element = this.creators.find(item => item._id === userId)
        if (element) {
          element.status = 'blocked';
        }
      }
    })
  }

  
  unBlockUser(userId: string) {
    this.userManagementByAdminService.unBlockUser(userId).subscribe((response: any) => {
      if (response.success == true) {
        const element = this.creators.find(item => item._id === userId)
        if (element) {
          element.status = 'active';
        }
      }

    })
  }
}
