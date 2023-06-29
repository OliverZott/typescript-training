// Array
let array1: number[] = [1, 2, 3]

// Usage
array1[1];
array1 = [1, 2, 3, 4];
array1 = ["hello"];

// Tuple
let tuple1: [number, number] = [1, 2];

tuple1 = ['f', 'd'];

console.log(tuple1[0]);



// ---------------------------------------------------
/** Destruct collection */

let example1: string[] = ["Aut", "Ger", "UK", "USA", "RU"]

const [erstes, zweites, dritters, ...rest] = example1;
console.log(`${dritters} ${erstes} ${rest}`);
