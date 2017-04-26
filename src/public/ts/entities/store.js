"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = require("./entity");
/**
 * Created by ori on 4/20/2017.
 */
var Store = (function (_super) {
    __extends(Store, _super);
    function Store() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Store.prototype, "Email", {
        get: function () {
            return this._Email;
        },
        set: function (value) {
            this._Email = value;
        },
        enumerable: true,
        configurable: true
    });
    return Store;
}(entity_1.Entity));
exports.Store = Store;

//# sourceMappingURL=store.js.map
