import { Component } from '@angular/core';
import { UserLoginService } from 'src/app/services/user/user-login.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {
  constructor(public loginService: UserLoginService) { }
  logout(){
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    this.loginService.markAsLoggedOut()

  }
}
