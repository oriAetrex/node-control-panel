/**
 * Created by ori on 4/27/2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../../services/index");
var global_service_1 = require("../../services/global.service");
var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService, globalService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.globalService = globalService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        if (this.authenticationService.isLogin()) {
            this.router.navigate([this.returnUrl]);
            return;
        }
        this.authenticationService.logout();
        this.globalService.isLogin = false;
        // get return url from route parameters or default to '/'
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            /**
             * @param {{err:number,errMessage:string}} data
             */
            if (!data.err) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentStore', JSON.stringify(data.store));
                _this.globalService.isLogin = true;
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                _this.alertService.error(data.errMessage);
            }
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        // moduleId: module.id,
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        index_1.AuthenticationService,
        index_1.AlertService,
        global_service_1.GlobalService])
], LoginComponent);
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map
