/**
 * @returns true if input string is palindrome
 */

export function isPalindrome (input: string): boolean {
    let inputReversed = input.split('').reverse().join('');
    return input === inputReversed;
}


export function isPalindromeCaseInsensitive (input: string): boolean {
    let inputReversed = input.toLowerCase().split('').reverse().join('');
    return input.toLowerCase() === inputReversed;
}
