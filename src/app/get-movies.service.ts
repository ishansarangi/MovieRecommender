import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  endPoint = 'http://web:8081/api/getMovies';
  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': 'Basic bW92aWVyZWNvbW1lbmRlcjpzM2N1ciFU' })
  };

  constructor(private http: HttpClient) { }

  fetchMovies(){
    return this.http.get(this.endPoint,this.httpOptions);
  }
}
