/**
 * Created by private on 29/04/2017.
 */

export class sql {
    constructor(
        private _str = ""
    ){}

    select(str:string): void {
        this._str +=  "SELECT " + str + " ";
    }

    from(str:string): void {
        this._str +=  "FROM " + str + " ";
    }

    where(str:string): void {
        this._str +=  "WHERE " + str + " ";
    }

    and_where(str:string): void {
        this._str +=  "AND " + str + " ";
    }
    get(): string {
        return this._str;
    }
}
