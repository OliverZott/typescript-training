/**
 * Literal types
 */

// EXAMPLE 1
let direction: string;
direction = "Nort";
direction = "n0rth";

let directionLiteral: "Nort" | "South";
directionLiteral = "Nort";
// directionLiteral = "N0rt";




// EXAMPLE 2 
type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function roleDice() {
    let rand = Math.random();
    return (Math.floor(rand * 6) + 1) as DiceValue;
}

console.log(roleDice());

// use like enum ?!
if (roleDice() === 7) {
    console.log(typeof roleDice());
}