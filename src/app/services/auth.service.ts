import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiLoginUrl = environment.apiLogin;
  constructor(private httpClient:HttpClient) { }

  login(username : string,password:string): Observable<any>{
      const headers = new HttpHeaders();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      var check = this.httpClient.post(this.apiLoginUrl, { email: username, password }, { headers });
      return check;
  }

  refreshToken(token : string,refreshToken:string): Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(environment.api+"api/refreshToken", { token: token, refreshToken:refreshToken }, { headers });
}



}
