

let hello: unknown;


// might explode
const trimmed0 = hello.trim();


// assert using if()
if (typeof hello === 'string') {
    const trimmed1 = hello.trim();
}


// assert type without using if(hello === string)
const trimmed2 = (hello as string).trim();
const trimmed3 = (<string>hello).trim();



// -----------------------------------------------------------------
/** Type Casting 
 * 
 *  Assertions are NO CASTINGS !!!!
*/

let leet: string = '1337';

const asNumber = leet as number;
const number = +leet;

console.log(number === 1337)  // false
console.log(number);  // '1337'