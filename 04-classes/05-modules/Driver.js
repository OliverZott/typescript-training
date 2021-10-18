"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var myCustomerPara = new Customer_1.CustomerModule("Martin", "Dixon");
myCustomerPara.firstName = "Susan";
myCustomerPara.lastName = "Public";
console.log(myCustomerPara.firstName);
console.log(myCustomerPara.lastName);
