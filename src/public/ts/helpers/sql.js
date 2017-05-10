/**
 * Created by private on 29/04/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sql = (function () {
    function sql(_str) {
        if (_str === void 0) { _str = ""; }
        this._str = _str;
    }
    sql.prototype.select = function (str) {
        this._str += "SELECT " + str + " ";
    };
    sql.prototype.from = function (str) {
        this._str += "FROM " + str + " ";
    };
    sql.prototype.where = function (str) {
        this._str += "WHERE " + str + " ";
    };
    sql.prototype.and_where = function (str) {
        this._str += "AND " + str + " ";
    };
    sql.prototype.get = function () {
        return this._str;
    };
    return sql;
}());
exports.sql = sql;

//# sourceMappingURL=sql.js.map
