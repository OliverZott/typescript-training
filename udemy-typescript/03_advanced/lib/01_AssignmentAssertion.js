"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ------------------------------------------------------------------------
// EXAMPLE 1
let dice;
function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1);
}
rollDice();
console.log('Current Dice Value: ', dice); // Error 
// ------------------------------------------------------------------------
// EXAMPLE 2
class Point {
    constructor() {
        this.moveRandom();
    }
    moveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}
