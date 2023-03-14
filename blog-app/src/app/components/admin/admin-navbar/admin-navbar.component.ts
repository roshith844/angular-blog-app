import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from 'src/app/services/admin/admin-login.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  isMenuOptionsVisible = false
  constructor(public adminLoginService: AdminLoginService) { }



  ngOnInit(): void {
    const ACCESS_TOKEN = localStorage.getItem('admin-accessToken')
    const REFRESH_TOKEN = localStorage.getItem('admin-refreshToken')
    if (ACCESS_TOKEN != null && REFRESH_TOKEN != null) {
      this.adminLoginService.markAsLoggedIn()
    }
  }
  toggleMenu() {
    if (this.isMenuOptionsVisible === false) {
      this.isMenuOptionsVisible = true
    } else {
      this.isMenuOptionsVisible = false
    }
  }

  toggleMenuOptionsVisibility() {
    this.isMenuOptionsVisible = !this.isMenuOptionsVisible;
  }

  logout() {
    localStorage.removeItem('admin-accessToken')
    localStorage.removeItem('admin-refreshToken')
    this.adminLoginService.markAsLoggedOut()
  }


}