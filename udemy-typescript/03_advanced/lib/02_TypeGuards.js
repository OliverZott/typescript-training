"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSquare(shape) {
    return 'size' in shape;
}
function isRectangle(shape) {
    return 'width' in shape;
}
function isREALLYRectangle(shape) {
    return 'width' in shape && 'size' in shape;
}
function area(shape) {
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
console.log(area({ size: 3, width: 4 })); // ????
console.log(area({ hight: 3, width: 4 })); // ????
