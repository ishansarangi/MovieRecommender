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


  constructor(private api: LoginService, private router: Router) { }

  ngOnInit() {
  }

  performLogin(){
    this.errorMessage = '';
    if (this.username.length == 0) {
      this.errorMessage = "Please enter a valid UserName!";
      console.log("UserName error");
    }

    this.api.login(
      this.username,
      this.userPassword
    )
      .subscribe(
        r => {
          console.log(r)
          if (r.success) {
            console.log(r)
            // this.customer.setToken(r.token);
            // this.router.navigateByUrl('/dashboard');

          }
        },
        r => {
          console.log(r)
          alert(r.error.error);
        });
      
  }
}
