import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BecomeWriterRequestService } from 'src/app/services/user/become-writer-request.service';
import { UserLoginService } from 'src/app/services/user/user-login.service';
import { WriterService } from 'src/app/services/writer/writer.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  isMenuOptionsVisible = false
  constructor(public loginService: UserLoginService,
    private becomeWriterService: BecomeWriterRequestService,
    public writerService: WriterService,
    private toastr: ToastrService) { }

  logout() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    this.loginService.markAsLoggedOut()
    this.toastr.success('Logged Out Successfully')
  }

  ngOnInit(): void {
    const ACCESS_TOKEN = localStorage.getItem('accessToken')
    const REFRESH_TOKEN = localStorage.getItem('refreshToken')
    if (ACCESS_TOKEN != null && REFRESH_TOKEN != null) {
      this.loginService.markAsLoggedIn()
    }
  }

  applyForWriterRole() {
    this.becomeWriterService.applyForWriterRole().subscribe((response: any) => {
      console.log(response)
      if (response.isWriter === true) {
        this.writerService.markAsWriter()
        this.toastr.success("Success!!", 'Now you can write blogs :)')
      } else {
        this.writerService.markAsNotAWriter()
        this.toastr.error('Something went wrong')
      }
    })
  }

  toggleMenu() {
    if (this.isMenuOptionsVisible === false) {
      this.isMenuOptionsVisible = true
    } else {
      this.isMenuOptionsVisible = false
    }
  }

}
