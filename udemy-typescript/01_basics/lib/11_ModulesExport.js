"use strict";
/**
 * @returns true if input string is palindrome
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindromeCaseInsensitive = exports.isPalindrome = void 0;
function isPalindrome(input) {
    let inputReversed = input.split('').reverse().join('');
    return input === inputReversed;
}
exports.isPalindrome = isPalindrome;
function isPalindromeCaseInsensitive(input) {
    let inputReversed = input.toLowerCase().split('').reverse().join('');
    return input.toLowerCase() === inputReversed;
}
exports.isPalindromeCaseInsensitive = isPalindromeCaseInsensitive;
//# sourceMappingURL=11_ModulesExport.js.map