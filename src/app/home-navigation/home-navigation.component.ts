import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home-navigation',
  templateUrl: './home-navigation.component.html',
  styleUrls: ['./home-navigation.component.css']
})
export class HomeNavigationComponent implements OnInit {

  
  items: MenuItem[];
  displayLogin: boolean = false;
  displaySignup: boolean = false;

    showDialog( buttonType) {
      if(buttonType ==='login'){
        this.displaySignup = false;
        this.displayLogin = true;
      }        
      else{
        this.displaySignup = true;
        this.displayLogin = false;
      } 
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
