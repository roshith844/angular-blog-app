import { Component } from '@angular/core';
import { UserSignupService } from 'src/app/services/user/user-signup.service';
import { FormBuilder } from '@angular/forms';
import { type signupFormData } from './../../../types/formData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  signupForm = this.formBuilder.group({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  errorMessageForName = ''
  errorMessageForEmail = ''
  errorMessageForPhone = ''
  errorMessageForPassword = ''
  errorMessageForConfirmPassword = ''

  constructor(private signUpService: UserSignupService, private formBuilder: FormBuilder, private router: Router) {

  }

  onSubmit() {
    console.log(this.signupForm.value)
    const NAME = this.signupForm.value.name
    const EMAIL = this.signupForm.value.email
    const PHONE = this.signupForm.value.phone
    const PASSWORD = this.signupForm.value.password
    const CONFIRM_PASSWORD = this.signupForm.value.confirmPassword

    const NAME_PATTERN = /^[a-z ,.'-]+$/i
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

    const PHONE_PATTERN = /^\d{10}$/
    // Form Validation 
    if (typeof EMAIL !== "string" || typeof PHONE !== "string" || typeof PASSWORD !== "string" || typeof NAME !== "string" || typeof CONFIRM_PASSWORD !== "string") {
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

    if (!PHONE_PATTERN.test(PHONE)) {
      this.errorMessageForPhone = 'email should be 10 digit number'
      return
    }

    if (PASSWORD.length < 2) {
      this.errorMessageForPassword = "password is should atleast contain 4 characters";
      return;
    } else if (PASSWORD.length >= 50) {
      this.errorMessageForPassword = "password is should exceed 10 characters";
      return;
    } else if (!PASSWORD_PATTERN.test(PASSWORD)) {
      this.errorMessageForPassword = 'password should have 1 uppercase, 1 lowecase, one special character'
      return
    }else if (CONFIRM_PASSWORD != PASSWORD) {
      this.errorMessageForConfirmPassword = 'password Doesnot Match'
      return
    }

    // API Request 
    if (typeof (this.signupForm.value.name) == 'string' && typeof (this.signupForm.value.email) == 'string' && typeof (this.signupForm.value.phone) == 'string' && typeof (this.signupForm.value.password) == 'string' && typeof (this.signupForm.value.confirmPassword) == 'string') {
      const SIGNUP_FORMDATA: signupFormData = {
        name: this.signupForm.value.name,
        email: this.signupForm.value.email,
        phone: this.signupForm.value.phone,
        password: this.signupForm.value.password,
        confirmPassword: this.signupForm.value.confirmPassword
      }
      this.signUpService.postSignupFormData(SIGNUP_FORMDATA).subscribe((response: any) => {
        console.log(response)
        if (response.success == true) {
          this.router.navigate(['login'])
        } else {
          this.router.navigate(['signup'])
        }
      })
    }

  }

}
