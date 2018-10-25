import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.css']
})
export class ShowtimesComponent implements OnInit {
  moviePoster:String;
  movieStyle = {
    
    'width': '60%',
    'height':'100%',
    'padding': '0px'
}
  constructor() { }

  ngOnInit() {
    this.moviePoster = "http://image.tmdb.org/t/p/w154/bURIWlkMbzT8RdpemzCmQECo2Uh.jpg";
  }

}
