import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EditUserProfileService } from 'src/app/services/user/profile/edit-user-profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  @Input() show = true;
  @Output() closeModalEvent = new EventEmitter<boolean>()
  @Input() profileDetails: { name: string, email: string, phone: string } = { name: 'loading', email: 'loading', phone: '' }

  onClose = new EventEmitter()
  constructor(private formBuilder: FormBuilder, private editUserProfileService: EditUserProfileService, private router: Router) { }
  emitCloseModalEvent() {
    this.closeModalEvent.emit(false);
  }
  editProfileForm = this.formBuilder.group({
    name: '',
    email: '',
    phone: ''
  })

 
  onSubmit() {
    console.log(this.editProfileForm.value)
    if (this.editProfileForm.value.name === null || this.editProfileForm.value.email === null || this.editProfileForm.value.phone === null) return
    this.editUserProfileService.editProfile(this.editProfileForm.value).subscribe((response: any) => {
      if (response.success !== true) {
        this.router.navigate(['profile'])
      }
      this.emitCloseModalEvent()
    })
  }


}
