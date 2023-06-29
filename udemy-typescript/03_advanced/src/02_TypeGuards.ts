/**
 * Type Guards
 * 
 * - return value: "argument is type"
 */
export { };


// ------------------------------------------------------------------------
// EXAMPLE 1
type Square = {
    size: number;
}
type Rectangle = {
    width: number;
    hight: number;
}
type Shape = Square | Rectangle;

function isSquare(shape: Shape): shape is Square {
    return 'size' in shape;
}
function isRectangle(shape: Shape): shape is Rectangle {
    return 'width' in shape;
}
function isREALLYRectangle(shape: Shape): shape is Rectangle {
    return 'width' in shape && 'size' in shape;
}

function area(shape: Shape): number {
    if (isSquare(shape)) {
        return Math.pow(shape.size, 2);
    }
    // else if (isRectangle(shape)) {
    //     return shape.width * shape.hight;
    // }
    else if (isREALLYRectangle(shape)) {
        return shape.width * shape.hight;
    }
    return 0;
}

console.log(area({ size: 3 }));
console.log(area({ size: 3, width: 4 }));   // ????
console.log(area({ hight: 3, width: 4 }));   // ????