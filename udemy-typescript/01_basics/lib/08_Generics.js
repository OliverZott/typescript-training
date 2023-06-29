"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** FIFO Collection */
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() {
        return this.data.shift();
    }
}
const queue = new Queue();
queue.push(123);
queue.push(42.124);
console.log(queue);
console.log(queue.pop());
console.log(queue);
//# sourceMappingURL=08_Generics.js.map