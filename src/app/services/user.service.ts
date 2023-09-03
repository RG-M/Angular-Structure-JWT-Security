import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api = environment.api;

  constructor(private httpClient:HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.api + "WeatherForecast/test");

  }
}
