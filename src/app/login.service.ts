import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // public getCustomerList(): Observable<Login> {
  //   // return (this.http.post(url:"localhost:8080",body:) );
  // }
}