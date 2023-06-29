"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
// void
function log(message) {
    console.log("LOG: " + message);
}
// various number of parameters
function sum(...values) {
    return (values.reduce((prev, curr) => { return prev + curr; }));
}
// First class functions: store function in variable
let Add2;
Add2 = function (a, b) {
    return a + b;
};
let add3;
add3 = function (a, b) {
    return a + b;
};
function Add4(x, y) {
    return x + y;
}
console.log(sum(1, 3, 17));
log("Hello :)");
console.log(add3(15, 10));
//# sourceMappingURL=05_Functions.js.map