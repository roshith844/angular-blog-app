import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreatorManagementByAdminService } from 'src/app/services/admin/creators/creator-management-by-admin.service';
import { UserManagementByAdminService } from 'src/app/services/admin/users/user-management-by-admin.service';

@Component({
  selector: 'app-creator-management-by-admin',
  templateUrl: './creator-management-by-admin.component.html',
  styleUrls: ['./creator-management-by-admin.component.css']
})
export class CreatorManagementByAdminComponent implements OnInit {
  creators: any[] = []
  constructor(private creatorManagementByAdminService: CreatorManagementByAdminService, private userManagementByAdminService: UserManagementByAdminService, private toastr: ToastrService) { }
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
        this.showSuccess('Blocked Successfully', '')

      } else {
        this.showFailure()
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
        this.showSuccess('UnBlocked Successfully', '')
      }else{
        this.showFailure()
      }

    })
  }

  dismissCreator(userId: string) {
    this.creatorManagementByAdminService.dismissCreator(userId).subscribe((response: any) => {
      if (response.success === true) {
        this.creators = this.creators.filter(obj => obj._id !== userId)
        this.showSuccess('Dismissed', 'writer is Now an Ordinary User')
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
