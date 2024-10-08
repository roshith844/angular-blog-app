import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserLoginService } from 'src/app/services/user/user-login.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard  {
  constructor(private userLoginService: UserLoginService,
    private router: Router,
    private toastr: ToastrService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
    if (this.userLoginService.isTokenExists()) return true
    this.toastr.error('Login Required')
    this.router.navigate(['/login'])
    return false;
  }

}
