import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationExtras, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router, private jwtService: JwtHelperService, private authService: AuthService) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token: string = localStorage.getItem('key') as string;
    let refreshToken: string = localStorage.getItem('refreshToken') as string;

    try {

      if(token && token != 'undifined'){
        return true
      }
      else{
        const extras: NavigationExtras = {
          queryParams: {
            returnUrl: state.url,
          }
        };
        this.router.navigate(['login'], extras);
        return false;
      }
      // if (!this.jwtService.isTokenExpired(token)) {
      //   return true;
      // } else {

      //   if(this.authService.refreshToken(token, refreshToken))
      //     return true;
      //   else
      //     return false
      // }

    } catch (error) {
      console.log("error guard", error);

      const extras: NavigationExtras = {
        queryParams: {
          returnUrl: state.url,
        }
      };
      this.router.navigate(['login'], extras);
      return false;
    }



  }
}


