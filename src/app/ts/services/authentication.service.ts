/**
 * Created by ori on 4/27/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig) { }

    login(username: string, password: string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json')
        return this.http.post(this.config.apiUrl + 'ajax_login', { username: username, password: password },{headers: headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let json = response.json();
                console.log(json)
                return json.data || { };
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentStore');
        return this.http.post(this.config.apiUrl + 'ajax_logout', {},{})
            .map((response: Response) => {
                let json = response.json();
                console.log(json)
                return json.data || { };
            });
    }
    isLogin() {
        if(localStorage.getItem("currentStore") === null) {
            return false;
        } else {
            return true;
        }
    }
    isSessionLogin() {
        return this.http.post(this.config.apiUrl + 'ajax_login_from_session', {},{})
            .map((response: Response) => {
                let json = response.json();
                console.log(json)
                return json.data || { };
            });
    }
}
