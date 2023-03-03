import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user/user-login.service';
import { type formData } from './../../../types/formData'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  errorMessageForEmail = ''
  errorMessageForPassword = ''
  constructor(private formBuilder: FormBuilder, private loginService: UserLoginService, private router: Router) {

  }

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  })

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
    }else  if (!PASSWORD_PATTERN.test(passwordInput)) {
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
      this.loginService.sendLoginFormData(LOGIN_FORMDATA).subscribe((response: any) => {
        console.log(response)
        if (response.success == true) {
          localStorage.setItem('accessToken', response.accessToken)
          localStorage.setItem('refreshToken', response.refreshToken)
          this.loginService.markAsLoggedIn()
          this.router.navigate([''])
        } else {
          this.router.navigate(['signup'])
        }

      })

    }




    // this.loginForm.reset()
  }
}
