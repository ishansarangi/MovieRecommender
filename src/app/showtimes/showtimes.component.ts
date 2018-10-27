import { Component, OnInit } from '@angular/core';
import { ShowtimesService } from '../services/showtimes.service'
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.css']
})
export class ShowtimesComponent implements OnInit {
  moviePoster: String;
  movieName: String;
  movieStyle = {

    'width': '60%',
    'height': '100%',
    'padding': '0px'
  }
  constructor(private fetchShows: ShowtimesService,private cookieService:CookieService) {
    this.movieName = this.cookieService.get("movieName");
    this.moviePoster = this.cookieService.get("moviePoster");
    this.moviePoster  = "url(" + this.moviePoster  + ")";
    
    console.log("movie from cookies- " );
    console.log("movie from cookies- " + this.movieName );
        this.fetchShows.fetchShowtimes(this.movieName)
      .subscribe(
        r => {
          console.log(r);
        }
      )
  }

  ngOnInit() {
    //this.moviePoster = "http://image.tmdb.org/t/p/w154/bURIWlkMbzT8RdpemzCmQECo2Uh.jpg";
    //this.movieName = "Venom";
  }
  setMyStyle(){
    let style={
      'background-image': this.moviePoster,
      'background-repeat': 'no-repeat',
      'background-size': '8em 12em',
      'padding': '0',
      'width':'50em',
      'height':'12em',
      'border-radius':'5px'
    }
    return style;
  }

}
