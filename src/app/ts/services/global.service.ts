/**
 * Created by ori on 4/30/2017.
 */

export class GlobalService {
    private _isLogin : boolean;


    public get isLogin(): boolean {
        return this._isLogin;
    }

    public set isLogin(value: boolean) {
        this._isLogin = value;
    }
}
