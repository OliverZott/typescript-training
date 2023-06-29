/**
 * Type Narrowing
 * 
 * - primitive types: === 'string'
 */


// ------------------------------------------------------------------------
// EXAMPLE 1
function printAsString(input) {
    if (typeof input === 'number') {
        console.log(typeof input)
        console.log(typeof String(input))
        console.log(String(input))
    }
}

let num: number = 2
let str: string = "2"
printAsString(num)
printAsString(str)

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

type Animal = Cat | Dog

function speak(animal: Animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    if (animal instanceof Cat) {
        animal.meow();
    }
}

let kosto: Animal = new Cat();
let bello: Animal = new Dog;
speak(bello);
speak(kosto);



// ------------------------------------------------------------------------
// EXAMPLE 3
type Circle = {
    kind: 'circle';
    radius: number;
}
type Square = {
    kind: 'square';
    size: number;
}
type Rectangle = {
    width: number;
    hight: number;
}
type Shape =
    | Square
    | Rectangle
    | Circle

function area(shape: Shape) {
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

area({ kind: 'circle', radius: 1 })
area({ size: 2 });
area({ width: 2, hight: 3 })