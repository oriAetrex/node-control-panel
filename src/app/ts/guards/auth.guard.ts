/**
 * Created by ori on 4/27/2017.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {GlobalService} from "../services/global.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private globalService : GlobalService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentStore')) {
            this.globalService.isLogin = true;
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.globalService.isLogin = false;
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
