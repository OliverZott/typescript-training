"use strict";
/**
 * @returns true if input string is palindrome
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(input) {
    let inputReversed = input.split('').reverse().join('');
    return input === inputReversed;
}
exports.isPalindrome = isPalindrome;
//# sourceMappingURL=index.js.map