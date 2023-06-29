export { }

function add(a: number, b: number): number {
    return a + b;
}

// void
function log(message: string): void {
    console.log("LOG: " + message);
}

// various number of parameters
function sum(...values: number[]) {
    return (values.reduce((prev, curr) => { return prev + curr }))
}

// First class functions: store function in variable
let Add2: (a: number, b: number) => number;
Add2 = function (a: number, b: number): number {
    return a + b;
}

type Add3 = (a: number, b: number) => number;  // with type-annotation
let add3: Add3;
add3 = function (a: number, b: number) {
    return a + b;
}

function Add4(x: number, y: number) {
    return x + y;
}


console.log(sum(1, 3, 17));
log("Hello :)")
console.log(add3(15, 10));