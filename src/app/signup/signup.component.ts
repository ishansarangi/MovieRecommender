import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { RegisterUserService } from '../services/register-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User();

  display: boolean = false;
  userMessage: String = "";
  validated: boolean = false;
  constructor(private api: RegisterUserService, private router:Router) { }

  showDialog() {
    console.log(this.userMessage);
    
    this.display = false;
    this.userMessage = "";
    if (this.user.userContactNo.length != 10) {
      this.display = true;
      this.userMessage = "Please enter a 10 digit Mobile Number!";
      console.log("mobile");

    }

    // else if (this.countryCode.length == 0) {
    //   this.display = true;
    //   this.userMessage = "Please enter a valid CountryCode!";
    //   console.log("cc");
    // }
    else if (this.user.firstName.length == 0) {

      this.display = true;
      this.userMessage = "Please enter a valid FirstName!";
      console.log("fn");
    }

    else if (this.user.lastName.length == 0) {

      this.display = true;
      this.userMessage = "Please enter a valid LastName!";
      console.log("ln");
    }

    else if (this.user.userName.length == 0) {

      this.display = true;
      this.userMessage = "Please enter a valid UserName!";
      console.log("un");
    }

    else if (!this.validateEmail(this.user.userEmailId) || this.user.userEmailId.length == 0) {

      this.display = true;
      this.userMessage = "Please enter a valid email!";
      console.log("mid");
    }

    else if (this.user.userPassword.length == 0) {
      this.display = true;
      this.userMessage = "Please enter a valid Password!";
      console.log("pwd");
    } 

    //TODO: Make date comparison for age and empty date

    // else 
    // if (this.user.userDOB.) {

    //   this.display = true;
    //   this.userMessage = "Please enter a valid Date Of Birth!";
    //   console.log("dob");
    // }
    else {
      this.api.registerUser(this.user).subscribe(
        response => {
          if (response.success){
            console.log(response);
            this.router.navigateByUrl('/home');
          }

          else{
            console.log(response);
          }
        },
        responseError => {
          this.display = true;
          this.userMessage = "Server error: Registration failed!";
        }
      )
    }
  }
  
  ngOnInit() {
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
