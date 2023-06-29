"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverse(input) {
    if (typeof input == 'string') {
        return input.split('').reverse().join();
    }
    else {
        return input.slice().reverse();
    }
}
console.log(reverse('hello'));
console.log(reverse(['h', 'e', 'l', 'l', 'o']));
