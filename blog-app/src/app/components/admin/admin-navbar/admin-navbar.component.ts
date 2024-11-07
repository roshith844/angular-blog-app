import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminLoginService } from 'src/app/services/admin/admin-login.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css'],
})
export class AdminNavbarComponent {
  isMenuOptionsVisible = false;
  constructor(
    public adminLoginService: AdminLoginService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  toggleMenu() {
    if (this.isMenuOptionsVisible === false) {
      this.isMenuOptionsVisible = true;
    } else {
      this.isMenuOptionsVisible = false;
    }
  }

  toggleMenuOptionsVisibility() {
    this.isMenuOptionsVisible = !this.isMenuOptionsVisible;
  }

  logout() {
    this.adminLoginService.signOutAdmin().then((signedOut) => {
      if (signedOut) {
        this.toastr.success('Logged Out', 'See You soon!');
        this.router.navigate(['/admin/login']);
      } else this.toastr.error('Something went wrong');
    });
  }
}
