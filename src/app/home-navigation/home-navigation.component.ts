import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home-navigation',
  templateUrl: './home-navigation.component.html',
  styleUrls: ['./home-navigation.component.css']
})
export class HomeNavigationComponent implements OnInit {

  
  items: MenuItem[];
  displayProfile: boolean = false;

  showProfile( ) {
    this.displayProfile = true;
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
