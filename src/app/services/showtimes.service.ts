import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowtimesService {

  endPoint = 'http://localhost:8081/api/getShowtimes';
  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': 'Basic bW92aWVyZWNvbW1lbmRlcjpzM2N1ciFU' })
  };

  constructor(private http: HttpClient) { }

  fetchShowtimes( movieId){
    this.endPoint = this.endPoint.concat("/") + movieId;
    return this.http.get(this.endPoint,this.httpOptions);
  }
}
