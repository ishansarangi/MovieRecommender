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
  buttonName: String = "Edit Profile";
  showDialog() {
    console.log(this.userMessage);
    this.display = false;
    this.userMessage = "";
    this.editProfile = false;
    this.buttonName = "Submit";
  }
  ngOnInit() {
  }

}
