"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by ori on 4/12/2017.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./app.routing");
var common_1 = require("@angular/common");
var app_config_1 = require("./app.config");
var auth_guard_1 = require("./guards/auth.guard");
var alert_component_1 = require("./directives/Alert/alert.component");
var header_component_1 = require("./directives/Header/header.component");
var footer_component_1 = require("./directives/Footer/footer.component");
var index_1 = require("./services/index");
var app_home_1 = require("./pages/home/app.home");
var login_component_1 = require("./pages/login/login.component");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
            http_1.JsonpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            alert_component_1.AlertComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            app_home_1.HomeComponent,
            login_component_1.LoginComponent,
        ],
        exports: [],
        providers: [
            app_config_1.AppConfig,
            auth_guard_1.AuthGuard,
            index_1.AlertService,
            index_1.GlobalService,
            index_1.AuthenticationService,
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
