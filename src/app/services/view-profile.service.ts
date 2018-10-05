import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {User} from '../model/user';
import { HttpParams } from '@angular/common/http';
import { HttpParamsOptions } from '@angular/common/http/src/params';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  httpOptions={
    headers:new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http:HttpClient) { }
  registerUser(user):Observable<User>{
    let body = new HttpParams();
    body.append('firstName',user.firstName)
    body.append('lastName',user.lastName)
    body.append('userName',user.userName)
    body.append('userEmailId',user.userEmailId)
    body.append('userContactNo',user.userContactNo)
    //body.append('userCity',user.userCity)
    body.append('userDOB',user.userDOB)
   // body.append('userAddress',user.userAddress)
   //body.append('userPinCode',user.userPinCode)

    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    
    return this.http.get<User>('http://localhost:8081/register/user/newUser', this.httpOptions);

}
}
