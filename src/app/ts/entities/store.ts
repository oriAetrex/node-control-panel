import {Entity} from "./entity";
/**
 * Created by ori on 4/20/2017.
 */

export class Store extends Entity{
    private _Email: string;


    get Email(): string {
        return this._Email;
    }

    set Email(value: string) {
        this._Email = value;
    }
}
