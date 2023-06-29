"use strict";
function formatCommandLine(input) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map((x) => x.trim()).join(' ');
    }
    return line;
}
console.log(formatCommandLine("Hello World"));
console.log(formatCommandLine(["Hello", "World"]));
// Runtime Error
// console.log(formatCommandLine(13423));
/**
 * Usage of Union Types
 *  e.g.   number | string
 */
function padLeft(input, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + input;
    }
    if (typeof padding === 'string') {
        return padding + input;
    }
    else {
        throw new Error(`Expected number or string. Got ${padding}`);
    }
}
console.log(padLeft("hello", 4));
console.log(padLeft("hello", "--"));
// console.log(padLeft("hello", false));
let dir1 = "blub";
let dir2 = "blir";
let dir3;
//# sourceMappingURL=03_UnionTypes.js.map