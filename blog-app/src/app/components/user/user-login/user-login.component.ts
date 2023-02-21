import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  errorMessageForEmail = ''
  errorMessageForPassword = ''
  constructor(private formBuilder: FormBuilder) {

  }

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  })

  onSubmit() {
    console.log(this.loginForm.value)
    let emailInput = this.loginForm.value.email
    let passwordInput = this.loginForm.value.password
    const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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
    }

    // this.loginForm.reset()
  }
}
