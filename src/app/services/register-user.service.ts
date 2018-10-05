import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Login } from '../login';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  authToken:any;
  user : any;

  constructor(private http:HttpClient) { }

  registerUser(user):Observable<Login>{
    let body = new HttpParams();
    body.append('firstName',user.firstName)
    body.append('lastName',user.lastName)
    body.append('userName',user.userName)
    body.append('userPassword',user.userPassword)
    body.append('userEmailId',user.userEmailId)
    body.append('userContactNo',user.userContactNo)
    //body.append('userCity',user.userCity)
    body.append('userDOB',user.userDOB)
   // body.append('userAddress',user.userAddress)
   //body.append('userPinCode',user.userPinCode)
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Login>('http://localhost:8081/register/user/newUser', body, {headers:headers});
  }
}
