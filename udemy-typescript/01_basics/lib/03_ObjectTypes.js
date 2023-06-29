"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ------------------------------------------------------------------------
// EXAMPLE 1
// An object is an instance which contains set of key value pairs. 
// center is a variable that must be assigned an object with x and y properties
let center = {
    x: 1,
    y: 2,
};
console.log(typeof center);
console.log(center);
let point1 = {
    x: 12,
    y: 72,
};
console.log(typeof point1);
console.log(point1);
// ------------------------------------------------------------------------
// EXAMPLE 2
function printName(obj) {
    if (obj.first !== undefined) {
        console.log(`First name: ${obj.first}`);
    }
    if (obj.last !== undefined) {
        console.log(`Last name: ${obj.last}`);
    }
    else {
        console.log("Sorry, no first or last name given :(");
    }
}
printName({ first: "Olli", last: "Zott" });
printName({ first: "Sigi" });
printName({});
//# sourceMappingURL=03_ObjectTypes.js.map