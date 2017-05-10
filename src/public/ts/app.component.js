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
var index_1 = require("./services/index");
var global_service_1 = require("./services/global.service");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(authenticationService, globalService, router) {
        this.authenticationService = authenticationService;
        this.globalService = globalService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.isSessionLogin().subscribe(function (data) {
            /**
             * @param {{err:number,errMessage:string}} data
             */
            console.log(data);
            if (!data.err) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentStore', JSON.stringify(data.store));
                _this.globalService.isLogin = true;
            }
            else {
                localStorage.removeItem('currentStore');
                _this.globalService.isLogin = false;
            }
        }, function (error) {
        });
        // this.authenticationService.isLogin()
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: 'my-app',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [index_1.AuthenticationService,
        global_service_1.GlobalService,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
