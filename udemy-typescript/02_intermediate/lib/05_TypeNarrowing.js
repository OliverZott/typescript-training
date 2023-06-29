"use strict";
/**
 * Type Narrowing
 *
 * - primitive types: === 'string'
 */
// ------------------------------------------------------------------------
// EXAMPLE 1
function printAsString(input) {
    if (typeof input === 'number') {
        console.log(typeof input);
        console.log(typeof String(input));
        console.log(String(input));
    }
}
let num = 2;
let str = "2";
printAsString(num);
printAsString(str);
// ------------------------------------------------------------------------
// EXAMPLE 2
class Cat {
    meow() {
        console.log("Meow");
    }
}
class Dog {
    bark() {
        console.log("Wuf");
    }
}
function speak(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    if (animal instanceof Cat) {
        animal.meow();
    }
}
let kosto = new Cat();
let bello = new Dog;
speak(bello);
speak(kosto);
function area(shape) {
    if (shape.kind === 'circle') {
        console.log(`Area: ${Math.pow(shape.radius, 2) * Math.PI}`);
    }
    if ('size' in shape) {
        console.log(`Area: ${shape.size * shape.size}`);
    }
    if ('width' in shape) {
        console.log(`Area: ${shape.width * shape.hight}`);
    }
}
area({ kind: 'circle', radius: 1 });
area({ size: 2 });
area({ width: 2, hight: 3 });
//# sourceMappingURL=05_TypeNarrowing.js.map