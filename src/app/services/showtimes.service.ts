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

  fetchShowtimes( movieName){
    console.log("Fetch" + movieName);
    this.endPoint = this.endPoint.concat("?movieName=") + movieName;
    return this.http.post(this.endPoint,this.httpOptions);
  }
}
