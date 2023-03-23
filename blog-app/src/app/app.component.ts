import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from './services/user-details.service';
import { WriterService } from './services/writer/writer.service'
import { UserLoginService } from './services/user/user-login.service'
import { AdminLoginService } from './services/admin/admin-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blog-app';
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
