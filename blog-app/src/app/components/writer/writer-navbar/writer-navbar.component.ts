import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BecomeWriterRequestService } from 'src/app/services/user/become-writer-request.service';
import { UserLoginService } from 'src/app/services/user/user-login.service';
import { WriterService } from 'src/app/services/writer/writer.service';

@Component({
  selector: 'app-writer-navbar',
  templateUrl: './writer-navbar.component.html',
  styleUrls: ['./writer-navbar.component.css']
})
export class WriterNavbarComponent {
  constructor(public loginService: UserLoginService,
    private becomeWriterService: BecomeWriterRequestService,
    public writerService: WriterService,
    private toastr: ToastrService,
    private router: Router) { }
  logout() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    this.loginService.markAsLoggedOut()
    this.toastr.success('Logged Out Successfully')
    this.router.navigate([''])
  }

}