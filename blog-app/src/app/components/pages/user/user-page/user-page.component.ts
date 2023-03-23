import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from 'src/app/services/admin/admin-login.service';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { UserLoginService } from 'src/app/services/user/user-login.service';
import { WriterService } from 'src/app/services/writer/writer.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  constructor(public userDetailsService: UserDetailsService, public writerService: WriterService, public userLoginService: UserLoginService,
    private adminLoginService: AdminLoginService
  ) { }
ngOnInit(): void {
  
  this.userDetailsService.getUserDetails().subscribe((response: any) => {
    if (response.loggedIn == true) {

      this.userDetailsService.modifyNameOfUser(response.name)
      this.userDetailsService.modifyProfilePictureOfUser(response.image)
      this.userDetailsService.modifyIdOfUser(response.userId)


      if (response.role == 'user') {
        this.userLoginService.markAsLoggedIn()
        this.writerService.markAsNotAWriter()
      } else if (response.role == 'writer') {
        this.userLoginService.markAsLoggedIn()
        this.writerService.markAsWriter()
      } else if (response.role === 'admin') {
        this.adminLoginService.markAsLoggedIn()
      } else {
        this.userLoginService.markAsLoggedOut()
        this.writerService.markAsNotAWriter()
        this.adminLoginService.markAsLoggedOut()
      }
    }

  })
}




}
