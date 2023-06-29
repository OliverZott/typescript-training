/**
 * Radonly 
 *   - to avoid overwriting (call-by-reference)
 */
export { };


function revertSorted(input: number[]): number[] {
    return input.sort().reverse();
}

function revertSortedImmutable(input: readonly number[]): number[] {
    return input.slice().sort().reverse();
}

const startArray = [1, 4, 2, 6, 3, 5];
const result1 = revertSortedImmutable(startArray);
// const result2 = revertSorted(startArray);

console.log(startArray);
console.log(result1);
// console.log(result2);
