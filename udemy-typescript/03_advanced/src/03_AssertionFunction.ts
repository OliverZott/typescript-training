/**
 * Assertion Function
 * 
 * - Assertion functions for tests
 * - Type Guards for code
 */
export { };


// ------------------------------------------------------------------------
// EXAMPLE 1
type Person = {
    name: string,
    dateOfBirth?: Date;
}

function myAssertion(condition: unknown, message: string): asserts condition {
    if (!condition) {
        throw new Error(message);
    }
}

let person: Person = {
    name: "Oli",
    dateOfBirth: new Date(1983, 3, 26)
}
let person2!: Person;

myAssertion(person != null, "Person object is null :(");
console.log(person);
try {
    myAssertion(person2 != null, "Person object is null :(");
} catch (exc) {
    console.log(person2);
    console.log(exc);
}





// ------------------------------------------------------------------------
// EXAMPLE 2
function myDateAssertion(value: unknown): asserts value is Date {
    if (value instanceof Date) return;
    else throw new Error("Not of type Date :(")
}
myDateAssertion(person.dateOfBirth);
console.log(person);
console.log(person.dateOfBirth.toISOString());