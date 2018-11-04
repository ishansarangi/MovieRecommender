import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { APIResponse } from '../_models/apiResponse';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<APIResponse>  {
        const body = new FormData();
        body.append('username', username)
        body.append('password', password)
        body.append('submit', 'Login');
        return this.http.post<APIResponse>(`${environment.baseUrl}login`, body);
            // TODO: to be checked if required or remove
            // .pipe(map(user => {
            //     // login successful if there's a jwt token in the response
            //     console.log("newAuth"+user);
            //     if (user && user.success) {
            //         // store user details and jwt token in local storage to keep user logged in between page refreshes
            //         localStorage.setItem('currentUser', JSON.stringify(user));
            //         console.log("newAuth"+localStorage.getItem('currentUser'));
            //     }

            //     return user;
            // }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}