import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user/user-login.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  constructor(public loginService: UserLoginService) { }
  logout() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    this.loginService.markAsLoggedOut()

  }

  ngOnInit(): void {
    const ACCESS_TOKEN = localStorage.getItem('accessToken')
    const REFRESH_TOKEN = localStorage.getItem('refreshToken')
    if (ACCESS_TOKEN != null && REFRESH_TOKEN != null) {
      this.loginService.markAsLoggedIn()
    }

  }

}
