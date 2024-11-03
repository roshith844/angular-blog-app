// import { Injectable, Injector } from '@angular/core';
// import {
//   HttpErrorResponse,
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { catchError, Observable, switchMap, throwError } from 'rxjs';
// import { TokenService } from '../token.service';
// @Injectable({
//   providedIn: 'root',
// })
// export class JwtTokenInterceptorService implements HttpInterceptor {
//   constructor(private injector: Injector) {}

//   // intercept(
//   //   req: HttpRequest<any>,
//   //   next: HttpHandler
//   // ): Observable<HttpEvent<any>> {
//   //   let tokenService = this.injector.get(TokenService);
//   //   let tokenizedRequest = req.clone({
//   //     withCredentials: true, // Automatically include credentials in every request

//   //     // setHeaders: {
//   //     //   authorization: `${tokenService.getAccessToken()}`,
//   //     // },
//   //   });
//   //   return next.handle(tokenizedRequest);
//   // }

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     let tokenService = this.injector.get(TokenService);

//     // Clone the request to add `withCredentials: true`
//     let tokenizedRequest = req.clone({
//       withCredentials: true,
//     });

//     // Handle the request and refresh token if `401` error occurs
//     return next.handle(tokenizedRequest).pipe(
//       catchError((error: HttpErrorResponse) => {
//         if (error.status === 401 && !req.url.includes('/refresh-token')) {
//           // Attempt token refresh
//           return tokenService.refreshToken().pipe(
//             switchMap((newToken) => {
//               // Save the new token in the service
//               // tokenService.setAccessToken(newToken);

//               // Retry the failed request with the new token
//               const retryRequest = req.clone({
//                 // setHeaders: {
//                 //   authorization: `${newToken}`,
//                 // },
//                 withCredentials: true,
//               });
//               return next.handle(retryRequest);
//             }),
//             catchError((refreshError) => {
//               // If refreshing also fails, handle appropriately (e.g., logout user)
//               tokenService.logout();
//               return throwError(() => new Error('Something went wrong'));
//             })
//           );
//         } else {
//           // If not 401 or if it’s a refresh request, throw the error
//           return throwError(() => new Error('Something Went wrong'));
//         }
//       })
//     );
//   }
// }

import { Injectable, Injector } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root',
})
export class JwtTokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request to add `withCredentials: true`
    const tokenizedRequest = req.clone({
      withCredentials: true, // This allows cookies to be sent with the request
    });

    return next.handle(tokenizedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !req.url.includes('/refresh-token')) {
          // Attempt token refresh if the request fails with a 401
          return this.injector.get(TokenService).refreshToken().pipe(
            switchMap(() => {
              // After refreshing, retry the original request
              return next.handle(req.clone({
                withCredentials: true, // Include cookies again
              }));
            }),
            catchError((refreshError) => {
              // Handle refresh failure, e.g., logging out the user
              this.injector.get(TokenService).logout();
              return throwError(() => new Error('Refresh token failed, user logged out.'));
            })
          );
        } else {
          // If not a 401 error or if it’s a refresh request, rethrow the original error
          return throwError(() => error);
        }
      })
    );
  }
}

