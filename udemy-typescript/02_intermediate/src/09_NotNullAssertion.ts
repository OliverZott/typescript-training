/**
 * Not-NULL assertion
 * 
 * -  same as in C# with "!"
 * 
 */
export { };


// ------------------------------------------------------------------------
// EXAMPLE 1

type Point = {
    x: number;
    y: number;
}

let point: Point;
function initialize() {
    point = ({ x: 0, y: 12 });
}

initialize();
console.log(`After initialization ${point!.x} and  ${point!.y}`)