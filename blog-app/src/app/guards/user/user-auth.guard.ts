import { Injectable } from '@angular/core';
import {
  Router,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Injectable({
  providedIn: 'root',
})
export class UserAuthGuard {
  constructor(
    private userDetailsService: UserDetailsService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  canActivate(
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    return this.userDetailsService.getUserDetails().pipe(
      map((response: any) => {
        if (response.loggedIn === true) {
          if (response.role === 'writer' || response.role === 'user') {
            return true;
          } else {
            this.toastr.error('Something went wrong');
            this.router.navigate(['']);
            return false;
          }
        } else {
          this.toastr.error('Something went wrong');
          this.router.navigate(['']);
          return false;
        }
      })
    );
  }
}
