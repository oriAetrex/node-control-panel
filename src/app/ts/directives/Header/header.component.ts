import {Component, OnInit} from "@angular/core";
import {GlobalService} from "../../services/global.service";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
/**
 * Created by ori on 4/30/2017.
 */

@Component({
    // moduleId: module.id,
    selector: 'my-header',
    styles: [`
        :host {
          display:block;
          height:0;
        }
    `],
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
    constructor(
        private authenticationService : AuthenticationService,
        private globalService : GlobalService,
        private router : Router
    ){}


    ngOnInit(): void {

    }

    logout(): void {
        this.authenticationService.logout().subscribe(
            data => {
                /**
                 * @param {{err:number,errMessage:string}} data
                 */
                if (!data.err) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.removeItem('currentStore');
                    this.globalService.isLogin = false;
                    this.router.navigate(['/login']);
                } else {
                    // this.alertService.error(data.errMessage);
                }
                // this.loading = false;
            },
            error => {
                // this.alertService.error(error._body);
                // this.loading = false;
            });
    }
}
