import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BecomeWriterRequestService } from 'src/app/services/user/become-writer-request.service';
import { UserLoginService } from 'src/app/services/user/user-login.service';
import { WriterService } from 'src/app/services/writer/writer.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css'],
})
export class UserNavbarComponent {
  isMenuOptionsVisible = false;
  constructor(
    public loginService: UserLoginService,
    private becomeWriterService: BecomeWriterRequestService,
    public writerService: WriterService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  logout() {
    this.loginService.signOutUser().then((signedOut: boolean) => {
      if (signedOut) {
        this.toastr.success('Logged Out Successfully');
        this.router.navigate(['']);
      } else this.toastr.error('Something went wrong');
    });
  }

  applyForWriterRole() {
    this.becomeWriterService.applyForWriterRole().subscribe((response: any) => {
      if (response.isWriter === true) {
        this.writerService.markAsWriter();
        this.toastr.success('Success!!', 'Now you can write blogs :)');
      } else {
        this.writerService.markAsNotAWriter();
        this.toastr.error('Something went wrong');
      }
    });
  }

  toggleMenu() {
    if (this.isMenuOptionsVisible === false) {
      this.isMenuOptionsVisible = true;
    } else {
      this.isMenuOptionsVisible = false;
    }
  }
}
