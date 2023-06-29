/**
 * Null vs Undefined
 * 
 * - RegEx 
 *      - https://stackoverflow.com/questions/27916055/whats-the-meaning-of-gi-in-a-regex/27916089
 * - .match()
 *      - https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/match
 * - optional parameters: with "?"
 * 
 */
export { };



// ------------------------------------------------------------------------
// EXAMPLE 1
let notDefined: undefined = undefined;
let notPresent: null = null;

class Point {
    x: number;
    y: number;
    z?: number;
}

const center = new Point();
center.x = 0;
console.log(center.x + ' / ' + center.y);   // undefined



// ------------------------------------------------------------------------
// EXAMPLE 2
function logVowels(input: string) {
    console.log(input.match(/[aeiou]/gi))
}

logVowels("Hello");
logVowels("Sky");       // null