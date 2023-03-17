import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from './services/user-details.service';
import { WriterService } from './services/writer/writer.service'
import { UserLoginService } from './services/user/user-login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blog-app';
  constructor(public userDetailsService: UserDetailsService, public writerService: WriterService, public userLoginService: UserLoginService) { }
  ngOnInit(): void {
    this.userDetailsService.getUserDetails().subscribe((response: any) => {
      if (response.role == 'writer') {
        this.writerService.markAsWriter()
      } else {
        this.writerService.markAsNotAWriter()
      }

      if (response.loggedIn == true) {
        this.userLoginService.markAsLoggedIn()
        this.userDetailsService.modifyNameOfUser(response.name)
      } else {
        this.userLoginService.markAsLoggedOut()
      }

    })


  }
}
