/**
 * Created by ori on 4/30/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globalService = (function () {
    function globalService() {
    }
    Object.defineProperty(globalService.prototype, "isLogin", {
        get: function () {
            return this._isLogin;
        },
        set: function (value) {
            this._isLogin = value;
        },
        enumerable: true,
        configurable: true
    });
    return globalService;
}());
exports.globalService = globalService;

//# sourceMappingURL=globalService.js.map
