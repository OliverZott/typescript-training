"use strict";
/**
 * Literal types
 */
// EXAMPLE 1
let direction;
direction = "Nort";
direction = "n0rth";
let directionLiteral;
directionLiteral = "Nort";
function roleDice() {
    let rand = Math.random();
    return (Math.floor(rand * 6) + 1);
}
console.log(roleDice());
// use like enum ?!
if (roleDice() === 7) {
    console.log(typeof roleDice());
}
//# sourceMappingURL=04_LiteralTypes.js.map