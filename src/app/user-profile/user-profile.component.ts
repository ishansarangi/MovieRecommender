import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  dateOfBirth: String = "";
  firstName: String = "";
  lastName: String = "";
  email: String = "";
  userName: String = "";
  password: String = "";
  countryCode: String = "";
  mobile: String = "";
  display: boolean = false;
  userMessage: String = "";
  validated: boolean = false;
  editProfile: boolean = true;
  visibleEdit: boolean = true;
  visibleSubmit: boolean = false;
  buttonName: String = "Edit Profile";
  editProfileFields(){
    this.visibleEdit = false;
    this.visibleSubmit = true;
    this.editProfile = false;
  }
  profileValidation() {
    console.log(this.userMessage);
    
    this.userMessage = "";
    if (this.mobile.length != 10) {
      this.display = true;
      this.userMessage = "Please enter a 10 digit Mobile Number!";
      console.log("mobile");
    }
    else if (this.countryCode.length == 0) {
      this.display = true;
      this.userMessage = "Please enter a valid CountryCode!";
      console.log("cc");
    }
    else if (this.firstName.length == 0) {
      this.display = true;
      this.userMessage = "Please enter a valid FirstName!";
      console.log("fn");
    }
    else if (this.lastName.length == 0) {
      this.display = true;
      this.userMessage = "Please enter a valid LastName!";
      console.log("ln");
    }
    else if (this.userName.length == 0) {
      this.display = true;
      this.userMessage = "Please enter a valid UserName!";
      console.log("un");
    }
    else if (!this.validateEmail(this.email) || this.email.length == 0) {
      this.display = true;
      this.userMessage = "Please enter a valid MailId!";
      console.log("mid");
    }
    else if (this.password.length == 0) {
      this.display = true;
      this.userMessage = "Please enter a valid Password!";
      console.log("pwd");
    } else if (this.dateOfBirth.length == 0) {
      this.display = true;
      this.userMessage = "Please enter a valid Date Of Birth!";
      console.log("dob");
    }
    else {
      this.display = true;
      this.userMessage = "User Entered to System. Please LogIn.";
      
    }
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  ngOnInit() {
   this.userName= localStorage.getItem('currentUser');
   console.log(this.userName);
  }

}
