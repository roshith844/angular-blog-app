import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { UserLoginService } from 'src/app/services/user/user-login.service';
import { WriterService } from 'src/app/services/writer/writer.service';

@Injectable({
  providedIn: 'root'
})
export class WriterAuthGuard  {
  constructor(
    private userLoginService: UserLoginService,
    private userDetailsService: UserDetailsService,
    private writerService: WriterService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.userDetailsService.getUserDetails().pipe(
      map((response: any) => {
        if (response.loggedIn === true) {
          if (response.role === 'writer') {
            return true;
          } else {
            this.toastr.error('Access Restricted', 'You Must be a writer for Accessing');
            this.router.navigate(['']);
            return false;
          }
        } else {
          this.toastr.error('Access Restricted', 'You Must be logged in as a writer for Accessing');
          this.router.navigate(['']);
          return false;
        }
      })
    );
  }
}

