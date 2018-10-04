import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Login } from './login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endpoint = 'http://192.168.99.100:8081/login';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      
    })
  };
  username:string;
  password:string;

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  login(username: string, password: string): Observable<Login> {
    const body = new HttpParams()
    .set('username', username)
    .set('password', password);
    return this.http.post<Login>(this.endpoint, body.toString(), this.httpOptions);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
} 