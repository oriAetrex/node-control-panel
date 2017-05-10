/**
 * Created by ori on 4/27/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var app_home_1 = require("./pages/home/app.home");
var login_component_1 = require("./pages/login/login.component");
var auth_guard_1 = require("./guards/auth.guard");
var appRoutes = [
    { path: '', component: app_home_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=app.routing.js.map
