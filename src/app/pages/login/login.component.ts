import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;

  constructor(private router: Router,
              private _snackBar: MatSnackBar,
              private authService:AuthService) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      //Validators.email,Validators.required
    ]),
    password: new FormControl(null, [
      //Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,}'),Validators.required
    ])
  });

  getErrorMessagePassword() {
    let passwordformcontrol = this.loginForm.controls['password'];
    return passwordformcontrol.hasError('pattern') ? 'Maj & Min & Number (4 length min)' : '';
  }

  getErrorMessageEmail() {
    let emailformcontrol = this.loginForm.controls['email'];
    return emailformcontrol.hasError('email') ? 'Not a valid email' : '';
  }

  submitForm() {
    if (this.loginForm.invalid){
      this._snackBar.open("Error")
      return;
    }
    else{
      let email = this.loginForm.controls['email'].value;
      let password = this.loginForm.controls['password'].value;

      this.authService.login(email,password)
      .subscribe({
        next:(res)=>{
          console.log(res);
          localStorage.setItem('key', res.token);
          localStorage.setItem('refreshToken', res.refreshToken);
          this.router.navigate(['home']);
        },
        error:(err)=>{console.log("ops",err)},
        complete:()=>{console.log("done");}
      })
    }
    
  }
}
