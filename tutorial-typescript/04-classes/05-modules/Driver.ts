import { CustomerModule } from "./Customer"

let myCustomerPara = new CustomerModule("Martin", "Dixon");

myCustomerPara.firstName = "Susan";
myCustomerPara.lastName = "Public";

console.log(myCustomerPara.firstName);
console.log(myCustomerPara.lastName);