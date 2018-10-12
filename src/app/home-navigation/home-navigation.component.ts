import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ViewProfileService } from '../services/view-profile.service';

@Component({
  selector: 'app-home-navigation',
  templateUrl: './home-navigation.component.html',
  styleUrls: ['./home-navigation.component.css']
})
export class HomeNavigationComponent implements OnInit {

  
  items: MenuItem[];
  displayProfile: boolean = false;
  profileService : ViewProfileService;
  showProfile( ) {
    this.displayProfile = true;
    this.profileService.fetchUserDetails();
    console.log("Fetched.");
    }

  constructor() { }

  ngOnInit() {
    this.items = [
        {
            label: 'Movies',
            icon: 'fa fa-angle-down',
            disabled: true
        },
        {
          label: 'Theatres',
          icon: 'fa fa-angle-down',
          disabled: true
      }
    ];
}

}
