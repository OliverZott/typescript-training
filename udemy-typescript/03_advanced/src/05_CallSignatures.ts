/**
 * Call Signatures
 * 
 * - 2 versions of type-call-signature
 * - consturctor-signatures (also 2 versions)
 */
export { };


// ------------------------------------------------------------------------
// EXAMPLE 1 
type Add = (a: number, b: number) => number;

// with body-block:
//  - we can add also a property
//  - we can add function overload
type Add2 = {
    (a: number, b: number): number;
    (a: number, b: number, c: number): number;
    debugName?: string;
}

const add0: Add = (a: number, b: number) => { return a + b };
const add: Add2 = (a: number, b: number, c?: number) => { return a + b + (c != null ? c : 0) };
add.debugName = "Test"




// ------------------------------------------------------------------------
// EXAMPLE 2 - Constructor signatures

// short version
type PointCreater = new (x: number, y: number) => { x: number, y: number };

// long version
type PointCreater2 = {
    new(x: number, y: number): { x: number, y: number }
}

// above is the same as:
class Point {
    constructor(public x: number, public y: number) { }
}

const Point2: PointCreater = class {
    constructor(public x: number, public y: number) { }
}



// ------------------------------------------------------------------------
// EXAMPLE 3 - All stick together
type PointAll = {
    // constructor overloads
    new(x: number, y: number): { x: number, y: number }
    new(x: number, y: number, z: number): { x: number, y: number, z: number }
    // function overloads
    (x: number, y: number): { x: number, y: number };
    (x: number, y: number, z: number): { x: number, y: number, z: number }
    // Properties
    debug: string
}

