import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserLoginService } from 'src/app/services/user/user-login.service';
import { WriterService } from 'src/app/services/writer/writer.service';

@Injectable({
  providedIn: 'root'
})
export class WriterAuthGuard implements CanActivate {
  constructor(private userLoginService: UserLoginService,
    private writerService: WriterService,
    private router: Router,
    private toastr: ToastrService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.writerService.checkWriterStatus() === true) return true
    this.toastr.error('Access Restricted', 'You Must be a writer for Accessing')
    this.router.navigate([''])
    return false;
  }
  
}
