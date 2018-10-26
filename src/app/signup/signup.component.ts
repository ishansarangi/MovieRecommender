import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { RegisterUserService } from '../services/register-user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'
import { CustomValidator } from '../_validation';

@Component({
selector: 'app-signup',
templateUrl: './signup.component.html',
styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User();
      
  userMessage: String = "";
  validated: boolean = false;
      
  constructor(private api: RegisterUserService, private router:Router, private flashMessage:FlashMessagesService) { }

  onRegisterSubmit(){
      console.log(this.user);
      if(this.user.firstName == undefined || this.user.lastName == undefined || this.user.userAddress == undefined ||
          this.user.userCity == undefined || this.user.userContactNo == undefined || this.user.userDOB == undefined ||
          this.user.userEmailId == undefined || this.user.userName == undefined || this.user.userPassword == undefined ||
          this.user.userPinCode == undefined ){
          this.flashMessage.show("Please fill in all the details", { cssClass: 'alert-danger'});

      } else if(!CustomValidator.validateEmail(this.user.userEmailId)){
          this.flashMessage.show("Please fill in a valid Email Id", { cssClass: 'alert-danger'});

      } else if(!CustomValidator.phoneValidator(this.user.userContactNo)){
          this.flashMessage.show("Please fill in a valid mobile number", { cssClass: 'alert-danger'});

      }
      
      else {
        this.api.registerUser(this.user).subscribe(
            response => {
              if (response.success){
                console.log(response);
                localStorage.setItem('currentUser', this.user.userName);
                console.log(localStorage.getItem('currentUser'));
                this.router.navigateByUrl('/home');

              } else {
                console.log(response);
                this.flashMessage.show(response.errorReason, { cssClass: 'alert-danger'});

              }
            },
            responseError => {
              this.flashMessage.show("Server error: Registration failed!", { cssClass: 'alert-danger'});
              console.log("Server error: Registration failed!");
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

  keyPressForMobile(event: any) {
      const pattern = /[0-9\+\-\ ]/;
      let inputChar = String.fromCharCode(event.charCode);
      
      if (!pattern.test(inputChar)) {
          // invalid character, prevent input
          event.preventDefault();
      }
  }
}

