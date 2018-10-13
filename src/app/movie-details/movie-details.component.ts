import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from "../get-movies.service";
import { MoviesDetails } from "./movie";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movies:MoviesDetails[];
  constructor(private getMovies: GetMoviesService) { 
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

}
