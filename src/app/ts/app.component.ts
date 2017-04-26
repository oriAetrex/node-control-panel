/**
 * Created by ori on 4/12/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from './entities/store';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Component({
    selector: 'my-app',
    template: `<h1>{{name}}</h1>
                <ul>
                <li *ngFor="let store of stores; let i = index">{{store.Email}}</li>
                </ul>
                <div *ngIf="errorMessage">error: {{errorMessage}}</div>`,
})
export class AppComponent implements OnInit {
    private usersUrl:string = '/api/getAllStores';  // URL to web API
    private stores: Store[] = [];
    private errorMessage:string;
    private name:string = 'Stores List';
    constructor (private http: Http) {}
    getAllStores(): Observable<any> {
        return this.http.get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    ngOnInit() {
        this.getAllStores().subscribe(
            data => {
                console.log(data);
                if(data.err) {
                    this.errorMessage = data.errdesc;
                } else {
                    this.stores = <Store[]>data.stores
                }
                // for(let s of this.users) {
                //     console.log(s.Email);
                // }
            },
            error =>  this.errorMessage = <any>error
        );
    }
}
