"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ------------------------------------------------------------------------
// EXAMPLE 1
const fail = (message) => {
    throw new Error(message);
};
const infLoop = () => {
    while (true) {
        console.log("Hello");
    }
};
function infLoopAsFunc() {
    while (true) {
        console.log("Hello");
    }
}
function area(shape) {
    if (shape.type === 'rectangle') {
        return shape.width * shape.hight;
    }
    else if (shape.type === 'square') {
        return Math.pow(shape.size, 2);
    }
    let _allCasesHandled = shape;
    return _allCasesHandled; // to return number instead of number|undefined
}
//# sourceMappingURL=12_Never.js.map