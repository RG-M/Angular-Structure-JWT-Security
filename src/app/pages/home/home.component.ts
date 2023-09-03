import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private userService: UserService){
    console.log("home");    
  }

  getUsers(){
    this.userService.getUsers().subscribe(res=>{
      console.log(res);
    })
  }




}
