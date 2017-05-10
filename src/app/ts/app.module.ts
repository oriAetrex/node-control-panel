/**
 * Created by ori on 4/12/2017.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppConfig } from './app.config';

import { AuthGuard } from './guards/auth.guard';

import { AlertComponent } from './directives/Alert/alert.component';
import {HeaderComponent} from "./directives/Header/header.component";
import {FooterComponent} from "./directives/Footer/footer.component";

import { AlertService, AuthenticationService, GlobalService } from './services/index';

import { HomeComponent } from './pages/home/app.home';
import { LoginComponent } from './pages/login/login.component';

import { AppComponent }  from './app.component';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
    ],
    exports : [
        // globalService
    ],
    providers: [
        AppConfig,
        AuthGuard,
        AlertService,
        GlobalService,
        AuthenticationService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
