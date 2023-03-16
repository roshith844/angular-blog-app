import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/services/admin/admin-login.service';
import { formData } from 'src/app/types/formData';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  errorMessageForEmail = ''
  errorMessageForPassword = ''
  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  })
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private adminLoginService: AdminLoginService,
    private toastr: ToastrService
  ) { }

  onSubmit() {
    let emailInput = this.loginForm.value.email
    let passwordInput = this.loginForm.value.password
    const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    /* 
  Password should be
  At least 8 characters long
  Must contain at least one uppercase letter
  Must contain at least one lowercase letter
  Must contain at least one number
  Must contain at least one special character (@$!%*?&)
     */
    const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (typeof emailInput !== "string" || typeof passwordInput !== "string") {
      this.errorMessageForEmail = 'Invalid '
      return
    }
    if (!EMAIL_PATTERN.test(emailInput)) {
      this.errorMessageForEmail = 'Invalid email address'
      return
    }

    if (passwordInput.length < 2) {
      this.errorMessageForPassword = "password is should atleast contain 4 characters";
      return;
    } else if (passwordInput.length >= 50) {
      this.errorMessageForPassword = "password is should exceed 10 characters";
      return;
    } else if (!PASSWORD_PATTERN.test(passwordInput)) {
      this.errorMessageForPassword = 'Invalid Password Format'
      return
    }

    if (typeof this.loginForm.value.email != 'string' && typeof this.loginForm.value.password != 'string') {
      return
    }
    if (this.loginForm.value.email == null && this.loginForm.value.password == null) {
      return
    }

    if (typeof (this.loginForm.value.password) == 'string' && typeof (this.loginForm.value.email) == 'string') {
      const LOGIN_FORMDATA: formData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.adminLoginService.loginAdmin(LOGIN_FORMDATA).subscribe((response: any) => {
        if (response.success === true) {
          localStorage.setItem('admin-accessToken', response.accessToken)
          localStorage.setItem('admin-refreshToken', response.refreshToken)
          this.adminLoginService.markAsLoggedIn()
          this.showSuccess()
          this.router.navigate(['admin'])
        } else {
          this.showFailure()
        }
      })
    }
  }

  showSuccess() {
    this.toastr.success('Success', 'Welcome!')
  }
  showFailure() {
    this.toastr.error('Login Unsuccessful', 'Please Try again!')
  }

}
