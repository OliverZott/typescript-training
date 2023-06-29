/**
 * Indexed object type annotation
 *  - accessed by string/number-index
 *  - deleted with 'delete'    
 */
export { };


/** using string/num-index */
const strs = {
    hello: 'world'
};
const nums = {
    1337: 'leet'
};

console.log(strs['hello']); // access dict with string-index
console.log(nums[1337]);


/** Using index-signature */
type Person = {
    displayName: string,
    email: string,
};
type PersonDict = {
    [userName: string]: Person | undefined  // only string or number supported
    jane: Person,                           // required member
};

const persons: PersonDict = {
    jane: { displayName: 'Jane Doe', email: 'janed@mail.com' }
};

// assigning person to key 'John'
persons['john'] = { displayName: 'John Doe', email: 'johnd@mail.com' }
persons['max'] = { displayName: 'Max', email: 'max@mail.com' }

delete persons['max'];
console.log(persons);
console.log(typeof persons);

const result = persons['missing']
// console.log(result, result.email); 