/**
 * Const Assertion 
 *  - most immutable type possible
 *  - const assertion does 3 things:
 *      - converts any literal to their primitive types
 *      - uses "readonly" before any member of an object
 *      - converts any arrays to "readonly tuples"
 */
export { };


const person = {
    name: "name",
};
person.name = "new";


const person2 = {
    name: "name",
} as const;
person2.name = "new";
