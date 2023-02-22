import { Component } from '@angular/core';
import { UserSignupService } from 'src/app/services/user/user-signup.service';
import { FormBuilder } from '@angular/forms';
import { type signupFormData } from './../../../types/formData';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  signupForm = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  errorMessageForName = ''
  errorMessageForEmail = ''
  errorMessageForPassword = ''
  errorMessageForConfirmPassword = ''

  constructor(private signUpService: UserSignupService, private formBuilder: FormBuilder) {

  }

  onSubmit() {
    console.log(this.signupForm.value)
    const NAME = this.signupForm.value.name
    const EMAIL = this.signupForm.value.email
    const PASSWORD = this.signupForm.value.password
    const CONFIRM_PASSWORD = this.signupForm.value.confirmPassword

    const NAME_PATTERN = /^[a-z ,.'-]+$/i
    const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    // Form Validation 
    if (typeof EMAIL !== "string" || typeof PASSWORD !== "string" || typeof NAME !== "string" || typeof CONFIRM_PASSWORD !== "string") {
      this.errorMessageForEmail = 'Invalid '
      return
    }
    if (!NAME_PATTERN.test(NAME)) {
      this.errorMessageForName = 'invalid Name format'
      return
    }
    if (!EMAIL_PATTERN.test(EMAIL)) {
      this.errorMessageForEmail = 'Invalid email address'
      return
    }

    if (PASSWORD.length < 2) {
      this.errorMessageForPassword = "password is should atleast contain 4 characters";
      return;
    } else if (PASSWORD.length >= 50) {
      this.errorMessageForPassword = "password is should exceed 10 characters";
      return;
    }

    if (CONFIRM_PASSWORD != PASSWORD) {
      this.errorMessageForConfirmPassword = 'password Doesnot Match'
      return
    }

    // API Request 
    if (typeof (this.signupForm.value.name) == 'string' && typeof (this.signupForm.value.email) == 'string' && typeof (this.signupForm.value.password) == 'string' && typeof (this.signupForm.value.confirmPassword) == 'string') {
      const SIGNUP_FORMDATA: signupFormData = {
        name: this.signupForm.value.name,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        confirmPassword: this.signupForm.value.confirmPassword
      }
      this.signUpService.postSignupFormData(SIGNUP_FORMDATA).subscribe((response) => {
        console.log(response)
      })
    }

  }

}
