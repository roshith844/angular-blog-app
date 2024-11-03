import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EditUserProfileService } from 'src/app/services/user/profile/edit-user-profile.service';
enum Role {
  USER,
  WRITER,
}
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  imageUrl = '';
  @Input() show = true;
  @Input() role: Role = Role.USER; // user || writer
  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Input() profileDetails: {
    name: string;
    email: string;
    phone: string;
    image: string;
  } = { name: 'loading', email: 'loading', phone: '', image: '' };

  onClose = new EventEmitter();

  fileUpload!: File | null;
  constructor(
    private formBuilder: FormBuilder,
    private editUserProfileService: EditUserProfileService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  emitCloseModalEvent() {
    this.closeModalEvent.emit(false);
  }
  editProfileForm = this.formBuilder.group({
    name: '',
    email: '',
    phone: '',
  });

  onSubmit() {
    if (
      this.editProfileForm.value === null ||
      this.editProfileForm.value.name === null ||
      this.editProfileForm.value.email === null ||
      this.editProfileForm.value.phone === null
    )
      return;
    this.editUserProfileService
      .editProfile(this.editProfileForm.value)
      .subscribe((response: any) => {
        if (response.success === true) {
          const profilePageRoute =
            this.role === Role.WRITER ? 'writer/profile' : 'profile';
          this.router.navigate([profilePageRoute]);

          this.toastr.success('Profile Updated');
        } else {
          this.toastr.error('Some went wrong', 'Please Try again!');
        }
        this.emitCloseModalEvent();
      });
  }

  handleFileInput(file: any) {
    if (file === null) return;

    file = file.target.files;
    this.fileUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    if (this.fileUpload != null) {
      reader.readAsDataURL(this.fileUpload);
    }
    this.editUserProfileService
      .uploadImage(this.fileUpload)
      .subscribe((response: any) => {
        if (response.success === true) {
          this.profileDetails.image = response.data;
          this.toastr.success('Profile Picture Updated');
        }
      });
  }
}
