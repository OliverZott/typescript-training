"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add0 = (a, b) => { return a + b; };
const add = (a, b, c) => { return a + b + (c != null ? c : 0); };
add.debugName = "Test";
// above is the same as:
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const Point2 = class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};
