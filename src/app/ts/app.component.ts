/**
 * Created by ori on 4/27/2017.
 */

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/index';
import {GlobalService} from "./services/global.service";
import {Router} from "@angular/router";

@Component({
    // moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{
    constructor(
        private authenticationService: AuthenticationService,
        private globalService: GlobalService,
        private router: Router,
    ){}


    ngOnInit(): void {
        this.authenticationService.isSessionLogin().subscribe(
            data => {
                /**
                 * @param {{err:number,errMessage:string}} data
                 */
                console.log(data);
                if (!data.err) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentStore', JSON.stringify(data.store));
                    this.globalService.isLogin = true;
                } else {
                    localStorage.removeItem('currentStore');
                    this.globalService.isLogin = false;
                }
            },
            error => {
            });
        // this.authenticationService.isLogin()
    }
}
