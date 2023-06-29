"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myAssertion(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
let person = {
    name: "Oli",
    dateOfBirth: new Date(1983, 3, 26)
};
let person2;
myAssertion(person != null, "Person object is null :(");
console.log(person);
try {
    myAssertion(person2 != null, "Person object is null :(");
}
catch (exc) {
    console.log(person2);
    console.log(exc);
}
// ------------------------------------------------------------------------
// EXAMPLE 2
function myDateAssertion(value) {
    if (value instanceof Date)
        return;
    else
        throw new Error("Not of type Date :(");
}
myDateAssertion(person.dateOfBirth);
console.log(person);
console.log(person.dateOfBirth.toISOString());
