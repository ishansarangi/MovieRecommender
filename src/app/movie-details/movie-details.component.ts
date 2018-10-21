import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from "../get-movies.service";
import { MoviesDetails } from "./movie";
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movies:MoviesDetails[];
  constructor(private getMovies: GetMoviesService,private router: Router) { 
    console.log("movieName");
    this.getMovies.fetchMovies()
                  .subscribe(
                    r=>{
                      this.movies = r["movies"];
                      console.log(this.movies);
                    }
                  )
  }
  errorMessage: string;
  hasError: boolean;
  ngOnInit() {
  }
  routeMovie(movieName){
    console.log(movieName);
    //Call the Service to fetch the showtimes and other movie details and store it in the local storage after clearing the cookies
    this.router.navigateByUrl('/movieShowtimes');
  }
}
