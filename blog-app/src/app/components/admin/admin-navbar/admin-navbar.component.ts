import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminLoginService } from 'src/app/services/admin/admin-login.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  isMenuOptionsVisible = false
  constructor(public adminLoginService: AdminLoginService,
    private router: Router,
    private toastr: ToastrService) { }



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
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    this.adminLoginService.markAsLoggedOut()
    this.router.navigate(['/admin/login'])
    this.toastr.success('Logged Out', 'See You soon!')
  }

  showSuccess() {
    this.toastr.success('Logged Out', 'See You soon!')
  }

}