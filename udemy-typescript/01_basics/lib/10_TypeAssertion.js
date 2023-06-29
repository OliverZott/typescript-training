"use strict";
let hello;
// might explode
const trimmed0 = hello.trim();
// assert using if()
if (typeof hello === 'string') {
    const trimmed1 = hello.trim();
}
// assert type without using if(hello === string)
const trimmed2 = hello.trim();
const trimmed3 = hello.trim();
// -----------------------------------------------------------------
/** Type Casting
 *
 *  Assertions are NO CASTINGS !!!!
*/
let leet = '1337';
const asNumber = leet;
const number = +leet;
console.log(number === 1337); // false
console.log(number); // '1337'
//# sourceMappingURL=10_TypeAssertion.js.map