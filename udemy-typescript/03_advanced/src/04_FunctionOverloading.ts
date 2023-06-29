/**
 * Function Overloading
 * 
 * - basically it just 'shadows' all function overloads which are not appropriate!
 */
export { };


// ------------------------------------------------------------------------
// EXAMPLE 1
function reverse(input: string): string;
function reverse(input: string[]): string[];
function reverse(input: string | string[]) {
    if (typeof input == 'string') {
        return input.split('').reverse().join();
    }
    else {
        return input.slice().reverse();
    }
}

console.log(reverse('hello'));
console.log(reverse(['h', 'e', 'l', 'l', 'o']));
