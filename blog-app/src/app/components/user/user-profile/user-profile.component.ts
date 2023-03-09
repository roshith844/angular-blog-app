import { Component, OnInit } from '@angular/core';
import { EditUserProfileService } from 'src/app/services/user/profile/edit-user-profile.service';
import { GetProfileService } from 'src/app/services/user/profile/get-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name = ''
  email = ''
  role = ''
  canShowEditProfile = false
  profile = {
    name: '',
    email: '',
    phone: '',
    role : ''
  }
  constructor(private getProfileService: GetProfileService, private editUserProfileService: EditUserProfileService ) { }

  ngOnInit(): void {
    this.getProfileService.getProfile().subscribe((response: any) => {
      console.log(response)
      this.profile.name= response.name
      this.profile.email = response.email
      this.profile.phone = response.phone
      this.profile.role = response.role

    })
  }

  closeModal() {
    this.canShowEditProfile = false
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('image', file, file.name);
    this.editUserProfileService.uploadImage(formData).subscribe(response=>{
      console.log(response)
    })
  }
}
