"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** using string/num-index */
const strs = {
    hello: 'world'
};
const nums = {
    1337: 'leet'
};
console.log(strs['hello']); // access dict with string-index
console.log(nums[1337]);
const persons = {
    jane: { displayName: 'Jane Doe', email: 'janed@mail.com' }
};
// assigning person to key 'John'
persons['john'] = { displayName: 'John Doe', email: 'johnd@mail.com' };
persons['max'] = { displayName: 'Max', email: 'max@mail.com' };
delete persons['max'];
console.log(persons);
console.log(typeof persons);
const result = persons['missing'];
// console.log(result, result.email); 
