"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ------------------------------------------------------------------------
// EXAMPLE 1
let notDefined = undefined;
let notPresent = null;
class Point {
}
const center = new Point();
center.x = 0;
console.log(center.x + ' / ' + center.y); // undefined
// ------------------------------------------------------------------------
// EXAMPLE 2
function logVowels(input) {
    console.log(input.match(/[aeiou]/gi));
}
logVowels("Hello");
logVowels("Sky"); // null
//# sourceMappingURL=07_NullVsUndefined.js.map