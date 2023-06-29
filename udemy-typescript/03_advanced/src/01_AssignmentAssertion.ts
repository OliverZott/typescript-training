/**
 * Assignment Assertion
 * 
 * - use "!" after variable name
 */
export { };


// ------------------------------------------------------------------------
// EXAMPLE 1
let dice!: number;
function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1);
}
rollDice();

console.log('Current Dice Value: ', dice);  // Error 



// ------------------------------------------------------------------------
// EXAMPLE 2
class Point {
    x!: number;
    y!: number;
    constructor() {
        this.moveRandom();
    }

    moveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}


