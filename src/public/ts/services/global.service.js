/**
 * Created by ori on 4/30/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalService = (function () {
    function GlobalService() {
    }
    Object.defineProperty(GlobalService.prototype, "isLogin", {
        get: function () {
            return this._isLogin;
        },
        set: function (value) {
            this._isLogin = value;
        },
        enumerable: true,
        configurable: true
    });
    return GlobalService;
}());
exports.GlobalService = GlobalService;

//# sourceMappingURL=global.service.js.map
