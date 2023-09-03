import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('key') as string;
    let refreshToken = localStorage.getItem('refreshToken');
    let refrehed = false;
    next.handle(this.addTokenToHeaderRequest(token,request));


    return next.handle(request).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse && err.status === 401 && !refrehed) {
            refrehed = true;
          console.log("login error 401 ");

          if (token && refreshToken) {
            this.authService.refreshToken(token, refreshToken).subscribe({
              next: (res) => {
                localStorage.setItem('key', res.token);
                localStorage.setItem('refreshToken', res.refreshToken);
                next.handle(this.addTokenToHeaderRequest(res.token,request));
                refrehed = false;
                console.log("tokens refreshed !");
              },
              error: (error) => {
                console.log("error refresh" + error);
                this.router.navigate(['login']);
                refrehed = false;
                // we need to sign out in future and clar local storage
              }

            }
            )
          }
          else{
            console.log("token or refresh not exist");
            refrehed = false;
            this.router.navigate(['login']);
          }

        }
        return throwError(() => new Error());

      })
    )

  }

  addTokenToHeaderRequest(token:string,request: HttpRequest<any>){
    return request.clone({
      setHeaders: {
        authorization: "bearer " + token
      }
  })
}


}
