/**
 * Never type
 *  - eg for function that always throws or infinite-loops
 *  - use never-type to ensure all important cases are handled in code-base
 */
export { };

// ------------------------------------------------------------------------
// EXAMPLE 1
const fail = (message: string) => {
    throw new Error(message);
}

const infLoop = () => {
    while (true) {
        console.log("Hello");
    }
}

function infLoopAsFunc() {
    while (true) {
        console.log("Hello");
    }
}


// ------------------------------------------------------------------------
// EXAMPLE 2
type Square = {
    type: 'square',
    size: number,
}
type Rectangle = {
    type: 'rectangle',
    width: number,
    hight: number,
}
type Shape =
    | Rectangle
    | Square

function area(shape: Shape): number {
    if (shape.type === 'rectangle') {
        return shape.width * shape.hight;
    }
    else if (shape.type === 'square') {
        return Math.pow(shape.size, 2);
    }

    let _allCasesHandled: never = shape;
    return _allCasesHandled;        // to return number instead of number|undefined
}
