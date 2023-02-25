import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';
@Injectable({
  providedIn: 'root'
})
export class JwtTokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenService = this.injector.get(TokenService)
    let tokenizedRequest = req.clone({
      setHeaders: {
        'authorization': `${tokenService.getAccessToken()}`
      }
    })
    return next.handle(tokenizedRequest)
  }
}
