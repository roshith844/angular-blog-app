import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminProfileService } from 'src/app/services/admin/profile/admin-profile.service';

@Component({
  selector: 'app-admin-edit-profile',
  templateUrl: './admin-edit-profile.component.html',
  styleUrls: ['./admin-edit-profile.component.css']
})
export class AdminEditProfileComponent {
  imageUrl = ''

  @Input() show = true;
  @Output() closeModalEvent = new EventEmitter<boolean>()
  @Input() profileDetails: { name: string, email: string, phone: string, image: string } = { name: 'loading', email: 'loading', phone: '', image: '' }

  onClose = new EventEmitter()

  fileUpload!: File | null;
  constructor(private formBuilder: FormBuilder,
    private adminProfileService: AdminProfileService,
    private router: Router,
    private toastr: ToastrService) { }

  emitCloseModalEvent() {
    this.closeModalEvent.emit(false);
  }
  editProfileForm = this.formBuilder.group({
    name: '',
    email: '',
    phone: ''
  })


  onSubmit() {
    const TOKEN = localStorage.getItem('admin-accessToken')
    if(!TOKEN) return
    if (this.editProfileForm.value === null || this.editProfileForm.value.name === null ||
      this.editProfileForm.value.email === null || this.editProfileForm.value.phone === null) return
    this.adminProfileService.editProfile(this.editProfileForm.value, TOKEN).subscribe((response: any) => {
      if (response.success === true) {
        this.router.navigate(['profile'])
        this.toastr.success('Profile Updated')

      } else {
        this.toastr.error('Some went wrong', 'Please Try again!')
      }
      this.emitCloseModalEvent()
    })
  }

  handleFileInput(file: any) {
    const TOKEN = localStorage.getItem('admin-accessToken')
    if(!TOKEN) return
    if (file === null) return

    file = file.target.files
    this.fileUpload = file.item(0)
    var reader = new FileReader()
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result
    }
    if (this.fileUpload != null) {
      reader.readAsDataURL(this.fileUpload)
    }
    this.adminProfileService.uploadImage(this.fileUpload, TOKEN).subscribe((response: any) => {

      if (response.success === true) {
        this.profileDetails.image = response.data
        this.toastr.success('Profile Picture Updated')
      }
    })
  }
}
