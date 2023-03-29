import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { WriterService } from 'src/app/services/writer/writer.service';
import { AdminLoginService } from 'src/app/services/admin/admin-login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private adminLoginService: AdminLoginService,
    private writerService: WriterService,
    private router: Router,
    private toastr: ToastrService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.adminLoginService.isTokenExists()) return true
    this.toastr.error('Login Required')
    this.router.navigate(['admin/login'])
    return false;
  }

}
