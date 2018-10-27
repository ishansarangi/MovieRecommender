import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from "../get-movies.service";
import { MoviesDetails } from "./movie";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movies:MoviesDetails[];
  constructor(private getMovies: GetMoviesService,private router: Router, private cookieService: CookieService ) { 
    console.log("movieName");
    this.getMovies.fetchMovies()
                  .subscribe(
                    r=>{
                      this.movies = r["results"];
                      console.log(this.movies);
                    }
                  )
  }
  errorMessage: string;
  hasError: boolean;
  ngOnInit() {
  }
  routeMovie(movieName,poster){
    this.cookieService.set("moviePoster",poster);
    this.cookieService.set("movieName",movieName);
    console.log(movieName);
    this.router.navigateByUrl('/home/showtimes');
  }
}
