import {Entity} from "./entity";
/**
 * Created by ori on 4/20/2017.
 */

export class Store extends Entity{
    private _StoreID: number;
    private _StoreNIC: string;
    private _RetailCode: number;
    private _StoreName: string;
    private _Address: string;
    private _Address2: string;
    private _City: string;
    private _State: string;
    private _Country: string;
    private _Zip: number;
    private _Phone: string;
    private _Email: string;
    private _Password: string;
    private _ContactName: string;
    private _WebAddress: string;
    private _WebAddressForApp: string;
    private _StoreCreateDate: string;
    private _StoreInfoLastUpdated: string;
    private _DailyLetter: string;
    private _NewsLetter: string;
    private _Status: string;
    private _YearlyReminder: string;
    private _ReceiveWeeklyEmails: number;
    private _iStepVerNumber: string;
    private _iStepVerUpdateDate: string;
    private _YearlyDeliverTime: string;
    private _YearTranslation: string;
    private _SixMonthsTranslation: string;
    private _UpdateErrorDescription: string;
    private _RollBackVersion: string;
    private _OperatingSystem: string;


    get StoreID(): number {
        return this._StoreID;
    }

    set StoreID(value: number) {
        this._StoreID = value;
    }

    get StoreNIC(): string {
        return this._StoreNIC;
    }

    set StoreNIC(value: string) {
        this._StoreNIC = value;
    }

    get RetailCode(): number {
        return this._RetailCode;
    }

    set RetailCode(value: number) {
        this._RetailCode = value;
    }

    get StoreName(): string {
        return this._StoreName;
    }

    set StoreName(value: string) {
        this._StoreName = value;
    }

    get Address(): string {
        return this._Address;
    }

    set Address(value: string) {
        this._Address = value;
    }

    get Address2(): string {
        return this._Address2;
    }

    set Address2(value: string) {
        this._Address2 = value;
    }

    get City(): string {
        return this._City;
    }

    set City(value: string) {
        this._City = value;
    }

    get State(): string {
        return this._State;
    }

    set State(value: string) {
        this._State = value;
    }

    get Country(): string {
        return this._Country;
    }

    set Country(value: string) {
        this._Country = value;
    }

    get Zip(): number {
        return this._Zip;
    }

    set Zip(value: number) {
        this._Zip = value;
    }

    get Phone(): string {
        return this._Phone;
    }

    set Phone(value: string) {
        this._Phone = value;
    }

    get Email(): string {
        return this._Email;
    }

    set Email(value: string) {
        this._Email = value;
    }

    get Password(): string {
        return this._Password;
    }

    set Password(value: string) {
        this._Password = value;
    }

    get ContactName(): string {
        return this._ContactName;
    }

    set ContactName(value: string) {
        this._ContactName = value;
    }

    get WebAddress(): string {
        return this._WebAddress;
    }

    set WebAddress(value: string) {
        this._WebAddress = value;
    }

    get WebAddressForApp(): string {
        return this._WebAddressForApp;
    }

    set WebAddressForApp(value: string) {
        this._WebAddressForApp = value;
    }

    get StoreCreateDate(): string {
        return this._StoreCreateDate;
    }

    set StoreCreateDate(value: string) {
        this._StoreCreateDate = value;
    }

    get StoreInfoLastUpdated(): string {
        return this._StoreInfoLastUpdated;
    }

    set StoreInfoLastUpdated(value: string) {
        this._StoreInfoLastUpdated = value;
    }

    get DailyLetter(): string {
        return this._DailyLetter;
    }

    set DailyLetter(value: string) {
        this._DailyLetter = value;
    }

    get NewsLetter(): string {
        return this._NewsLetter;
    }

    set NewsLetter(value: string) {
        this._NewsLetter = value;
    }

    get Status(): string {
        return this._Status;
    }

    set Status(value: string) {
        this._Status = value;
    }

    get YearlyReminder(): string {
        return this._YearlyReminder;
    }

    set YearlyReminder(value: string) {
        this._YearlyReminder = value;
    }

    get ReceiveWeeklyEmails(): number {
        return this._ReceiveWeeklyEmails;
    }

    set ReceiveWeeklyEmails(value: number) {
        this._ReceiveWeeklyEmails = value;
    }

    get iStepVerNumber(): string {
        return this._iStepVerNumber;
    }

    set iStepVerNumber(value: string) {
        this._iStepVerNumber = value;
    }

    get iStepVerUpdateDate(): string {
        return this._iStepVerUpdateDate;
    }

    set iStepVerUpdateDate(value: string) {
        this._iStepVerUpdateDate = value;
    }

    get YearlyDeliverTime(): string {
        return this._YearlyDeliverTime;
    }

    set YearlyDeliverTime(value: string) {
        this._YearlyDeliverTime = value;
    }

    get YearTranslation(): string {
        return this._YearTranslation;
    }

    set YearTranslation(value: string) {
        this._YearTranslation = value;
    }

    get SixMonthsTranslation(): string {
        return this._SixMonthsTranslation;
    }

    set SixMonthsTranslation(value: string) {
        this._SixMonthsTranslation = value;
    }

    get UpdateErrorDescription(): string {
        return this._UpdateErrorDescription;
    }

    set UpdateErrorDescription(value: string) {
        this._UpdateErrorDescription = value;
    }

    get RollBackVersion(): string {
        return this._RollBackVersion;
    }

    set RollBackVersion(value: string) {
        this._RollBackVersion = value;
    }

    get OperatingSystem(): string {
        return this._OperatingSystem;
    }

    set OperatingSystem(value: string) {
        this._OperatingSystem = value;
    }
}
