import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;

  constructor(private router: Router,private _snackBar: MatSnackBar) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email,Validators.required]),
    password: new FormControl(null, [
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,}'),Validators.required])
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
    
    this.router.navigate(['home']);
  }
}
