import { Component } from '@angular/core';
import { AdminProfileService } from 'src/app/services/admin/profile/admin-profile.service';
import { GetProfileService } from 'src/app/services/user/profile/get-profile.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  name = ''
  email = ''
  role = ''

  canShowEditProfile = false

  profile = {
    name: '',
    email: '',
    phone: '',
    role: '',
    image: ''
  }

  constructor(private adminProfileService: AdminProfileService) { }

  ngOnInit(): void {
    const TOKEN = localStorage.getItem('admin-accessToken')
    if(!TOKEN) return
    this.adminProfileService.getProfile(TOKEN).subscribe((response: any) => {
      this.profile.name = response.name
      this.profile.email = response.email
      this.profile.phone = response.phone
      this.profile.role = response.role
      this.profile.image = response.image
    })
  }

  closeModal() {
    this.canShowEditProfile = false
  }

}
