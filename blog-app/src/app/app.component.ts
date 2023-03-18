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

      if (response.response.loggedIn == true) {

        this.userDetailsService.modifyNameOfUser(response.name)

        if (response.role == 'user') {
          this.userLoginService.markAsLoggedIn()
        } else {
          this.userLoginService.markAsLoggedOut()
        }

        if (response.role == 'writer') {
          this.writerService.markAsWriter()
        } else {
          this.writerService.markAsNotAWriter()
        }

        if (response.role === 'admin') {
          this.adminLoginService.markAsLoggedIn()
        } else {
          this.adminLoginService.markAsLoggedOut()
        }

      }






    })


  }
}
