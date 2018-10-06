import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username: string;
  userPassword: string;
  errorMessage: string;
  hasError: boolean;

  constructor(private api: LoginService, private router: Router) { }

  ngOnInit() {
  }

  performLogin(){
    this.errorMessage = '';
    this.hasError = false;
  
    this.validateUserName();
    this.validatePassword();

    if (!this.hasError){
      this.api.login(
        this.username,
        this.userPassword
      )
        .subscribe(
          r => {
            console.log(r)
            if (r.success) {
              console.log(r)
              this.router.navigateByUrl('/home');
            } else {
              alert(r.errorReason);
            }
          },
          r => {
            console.log(r)
            alert(r.error.error);
          }
        );
      
    }
  }

  validateUserName(){
    if (this.username.length == 0) {
      this.hasError = true;
      this.errorMessage = "Please enter a valid UserName!";
      alert(this.errorMessage);
    }
  }
  
  validatePassword(){
    if (this.userPassword.length == 0) {
      this.hasError = true;
      this.errorMessage = "Please enter the password!";
      alert(this.errorMessage);
    }
  }
}
