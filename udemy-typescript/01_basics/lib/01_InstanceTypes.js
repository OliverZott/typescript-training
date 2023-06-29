"use strict";
// Special JS Classes
let regExp = new RegExp('ab+x');
let regExp2 = /ab+x/;
let array = [1, 2, 3, 17, 'a'];
let set = new Set([1, 2, 3, 2]);
// Create classes yourself
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
let queue = new Queue();
queue.push(12);
console.log(queue);
console.log(queue.pop);
console.log(queue);
console.log(array);
console.log(set);
//# sourceMappingURL=01_InstanceTypes.js.map