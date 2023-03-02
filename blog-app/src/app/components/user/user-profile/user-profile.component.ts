import { Component, OnInit } from '@angular/core';
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

  constructor(private getProfileService: GetProfileService) { }

  ngOnInit(): void {
    this.getProfileService.getProfile().subscribe((response: any) => {
      console.log(response)
      this.name = response.name
      this.email = response.email
      this.role = response.role

    })
  }

}
