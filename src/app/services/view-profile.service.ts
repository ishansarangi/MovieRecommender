import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {User} from '../model/user';
import { HttpParams } from '@angular/common/http';
import { HttpParamsOptions } from '@angular/common/http/src/params';
import { Login } from '../login';

@Injectable({
  providedIn: 'root'
})
export class ViewProfileService {

  httpOptions={
    headers:new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http:HttpClient) { }

  fetchUserDetails():Observable<User>{
    let userName = localStorage.getItem('currentUser'); 
    return this.http.get<User>('http://localhost:8081/profile/fetch/'+userName, this.httpOptions);
  }

  editProfileWith(user: User):Observable<Login>{
    
    var headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    console.log(user);
    return this.http.post<Login>('http://localhost:8081/register/user/editUser', user, this.httpOptions);
  }
}
