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
    Object.defineProperty(Store.prototype, "StoreID", {
        get: function () {
            return this._StoreID;
        },
        set: function (value) {
            this._StoreID = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "StoreNIC", {
        get: function () {
            return this._StoreNIC;
        },
        set: function (value) {
            this._StoreNIC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "RetailCode", {
        get: function () {
            return this._RetailCode;
        },
        set: function (value) {
            this._RetailCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "StoreName", {
        get: function () {
            return this._StoreName;
        },
        set: function (value) {
            this._StoreName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "Address", {
        get: function () {
            return this._Address;
        },
        set: function (value) {
            this._Address = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "Address2", {
        get: function () {
            return this._Address2;
        },
        set: function (value) {
            this._Address2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "City", {
        get: function () {
            return this._City;
        },
        set: function (value) {
            this._City = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "State", {
        get: function () {
            return this._State;
        },
        set: function (value) {
            this._State = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "Country", {
        get: function () {
            return this._Country;
        },
        set: function (value) {
            this._Country = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "Zip", {
        get: function () {
            return this._Zip;
        },
        set: function (value) {
            this._Zip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "Phone", {
        get: function () {
            return this._Phone;
        },
        set: function (value) {
            this._Phone = value;
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(Store.prototype, "Password", {
        get: function () {
            return this._Password;
        },
        set: function (value) {
            this._Password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "ContactName", {
        get: function () {
            return this._ContactName;
        },
        set: function (value) {
            this._ContactName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "WebAddress", {
        get: function () {
            return this._WebAddress;
        },
        set: function (value) {
            this._WebAddress = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "WebAddressForApp", {
        get: function () {
            return this._WebAddressForApp;
        },
        set: function (value) {
            this._WebAddressForApp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "StoreCreateDate", {
        get: function () {
            return this._StoreCreateDate;
        },
        set: function (value) {
            this._StoreCreateDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "StoreInfoLastUpdated", {
        get: function () {
            return this._StoreInfoLastUpdated;
        },
        set: function (value) {
            this._StoreInfoLastUpdated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "DailyLetter", {
        get: function () {
            return this._DailyLetter;
        },
        set: function (value) {
            this._DailyLetter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "NewsLetter", {
        get: function () {
            return this._NewsLetter;
        },
        set: function (value) {
            this._NewsLetter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "Status", {
        get: function () {
            return this._Status;
        },
        set: function (value) {
            this._Status = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "YearlyReminder", {
        get: function () {
            return this._YearlyReminder;
        },
        set: function (value) {
            this._YearlyReminder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "ReceiveWeeklyEmails", {
        get: function () {
            return this._ReceiveWeeklyEmails;
        },
        set: function (value) {
            this._ReceiveWeeklyEmails = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "iStepVerNumber", {
        get: function () {
            return this._iStepVerNumber;
        },
        set: function (value) {
            this._iStepVerNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "iStepVerUpdateDate", {
        get: function () {
            return this._iStepVerUpdateDate;
        },
        set: function (value) {
            this._iStepVerUpdateDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "YearlyDeliverTime", {
        get: function () {
            return this._YearlyDeliverTime;
        },
        set: function (value) {
            this._YearlyDeliverTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "YearTranslation", {
        get: function () {
            return this._YearTranslation;
        },
        set: function (value) {
            this._YearTranslation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "SixMonthsTranslation", {
        get: function () {
            return this._SixMonthsTranslation;
        },
        set: function (value) {
            this._SixMonthsTranslation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "UpdateErrorDescription", {
        get: function () {
            return this._UpdateErrorDescription;
        },
        set: function (value) {
            this._UpdateErrorDescription = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "RollBackVersion", {
        get: function () {
            return this._RollBackVersion;
        },
        set: function (value) {
            this._RollBackVersion = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "OperatingSystem", {
        get: function () {
            return this._OperatingSystem;
        },
        set: function (value) {
            this._OperatingSystem = value;
        },
        enumerable: true,
        configurable: true
    });
    return Store;
}(entity_1.Entity));
exports.Store = Store;

//# sourceMappingURL=store.js.map
