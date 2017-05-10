/**
 * Created by ori on 4/27/2017.
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../services/index';
import {GlobalService} from "../../services/global.service";

@Component({
    // moduleId: module.id,
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private globalService : GlobalService
    ) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        if(this.authenticationService.isLogin()) {
            this.router.navigate([this.returnUrl]);
            return;
        }
        this.authenticationService.logout();
        this.globalService.isLogin = false;
        // get return url from route parameters or default to '/'
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    /**
                     * @param {{err:number,errMessage:string}} data
                     */
                    if (!data.err) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentStore', JSON.stringify(data.store));
                        this.globalService.isLogin = true;
                        this.router.navigate([this.returnUrl]);
                    } else {
                        this.alertService.error(data.errMessage);
                    }
                    this.loading = false;
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}
