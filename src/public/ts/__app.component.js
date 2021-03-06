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
/**
 * Created by ori on 4/12/2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.usersUrl = '/api/getAllStores'; // URL to web API
        this.stores = [];
        this.name = 'Stores List';
    }
    AppComponent.prototype.getAllStores = function () {
        return this.http.get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AppComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    AppComponent.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllStores().subscribe(function (data) {
            console.log(data);
            if (data.err) {
                _this.errorMessage = data.errdesc;
            }
            else {
                _this.stores = data.stores;
            }
            // for(let s of this.users) {
            //     console.log(s.Email);
            // }
        }, function (error) { return _this.errorMessage = error; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>{{name}}</h1>\n                <ul>\n                <li *ngFor=\"let store of stores; let i = index\">{{store.Email}}</li>\n                </ul>\n                <div *ngIf=\"errorMessage\">error: {{errorMessage}}</div>",
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=__app.component.js.map
