/**
 * Const vs Readonly
 * 
 * - producing compile-time error
 * - property assignment vs variable assignment (with types)
 * 
 */


type Point = {
    x: number;
    readonly y: number;
}

const point: Point = {
    x: 0,
    y: 0,
}

// variable assignment  --> ERROR
// point = { x: 1, y: 1 };

// property assignment (still working on const)
point.x = 1;
// point.y = 2; 

console.log(point);