/**
 * Created by ori on 4/12/2017.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent }  from './app.component';

@NgModule({
    providers: [{provide: APP_BASE_HREF, useValue:'<f:uri.page pageUid="{currentPageUid}" />'}],
    imports:      [
        BrowserModule,
        HttpModule,
        JsonpModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
