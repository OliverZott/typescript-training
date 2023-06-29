"use strict";
var CustomerPara = /** @class */ (function () {
    function CustomerPara(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerPara.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerPara.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerPara;
}());
var myCustomerPara = new CustomerPara("Martin", "Dixon");
myCustomerPara.firstName = "Susan";
myCustomerPara.lastName = "Public";
console.log(myCustomerPara.firstName);
console.log(myCustomerPara.lastName);
