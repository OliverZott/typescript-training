"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function revertSorted(input) {
    return input.sort().reverse();
}
function revertSortedImmutable(input) {
    return input.slice().sort().reverse();
}
const startArray = [1, 4, 2, 6, 3, 5];
const result1 = revertSortedImmutable(startArray);
// const result2 = revertSorted(startArray);
console.log(startArray);
console.log(result1);
// console.log(result2);
