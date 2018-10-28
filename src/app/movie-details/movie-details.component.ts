import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from "../get-movies.service";
import { MoviesDetails } from "./movie";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FetchtrailersService } from '../services/fetchtrailers.service'
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movies: MoviesDetails[];
  trailersObj:any;
  constructor(private getMovies: GetMoviesService, private getTrailers: FetchtrailersService,
    private router: Router, private cookieService: CookieService) {
    console.log("movieName");
    this.getMovies.fetchMovies()
      .subscribe(
        r => {
          this.movies = r["results"];
          console.log(this.movies);
        }
      )
    this.getTrailers.fetchTrailers()
      .subscribe(
        r => {
          console.log(r);
        }
      )
  }
  errorMessage: string;
  hasError: boolean;
  ngOnInit() {
  }
  routeMovie(movieName, poster,movieDesc) {
    this.cookieService.set("moviePoster", poster);
    this.cookieService.set("movieName", movieName);
    this.cookieService.set("movieDesc", movieDesc);
    console.log("From Cookies- " + this.cookieService.get('movieName'));
    this.router.navigateByUrl('/home/showtimes');
  }
}
