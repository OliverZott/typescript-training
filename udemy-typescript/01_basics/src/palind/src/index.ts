/**
 * @returns true if input string is palindrome
 */

 export function isPalindrome (input: string): boolean {
    let inputReversed = input.split('').reverse().join('');
    return input === inputReversed;
}
