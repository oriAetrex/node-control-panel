import {Component, OnInit} from "@angular/core";
import {GlobalService} from "../../services/global.service";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
/**
 * Created by ori on 4/30/2017.
 */

@Component({
    // moduleId: module.id,
    selector: 'my-footer',
    styles: [`
        :host {
          display:block;
          height:0;
        }
    `],
    templateUrl: './footer.component.html'
})

export class FooterComponent implements OnInit{
    constructor(
        private authenticationService : AuthenticationService,
        private globalService : GlobalService,
        private router : Router
    ){}


    ngOnInit(): void {

    }

    logout(): void {
        this.authenticationService.logout();
        this.globalService.isLogin = false;
        this.router.navigate(['/login']);
    }
}
