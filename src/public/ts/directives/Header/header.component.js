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
var global_service_1 = require("../../services/global.service");
var authentication_service_1 = require("../../services/authentication.service");
var router_1 = require("@angular/router");
/**
 * Created by ori on 4/30/2017.
 */
var HeaderComponent = (function () {
    function HeaderComponent(authenticationService, globalService, router) {
        this.authenticationService = authenticationService;
        this.globalService = globalService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.authenticationService.logout().subscribe(function (data) {
            /**
             * @param {{err:number,errMessage:string}} data
             */
            if (!data.err) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.removeItem('currentStore');
                _this.globalService.isLogin = false;
                _this.router.navigate(['/login']);
            }
            else {
                // this.alertService.error(data.errMessage);
            }
            // this.loading = false;
        }, function (error) {
            // this.alertService.error(error._body);
            // this.loading = false;
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: 'my-header',
        styles: ["\n        :host {\n          display:block;\n          height:0;\n        }\n    "],
        templateUrl: './header.component.html'
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        global_service_1.GlobalService,
        router_1.Router])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=header.component.js.map
