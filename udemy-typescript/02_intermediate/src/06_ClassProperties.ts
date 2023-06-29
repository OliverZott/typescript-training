/**
 * Class parameter properties
 * 
 * - fields are properties on a class
 * - short version of member fields
 *      - no this. ... necessary
 * - Optional with "?"
 * 
 */
export { };

class Person {
    constructor(
        public name: string,
        public age: number,
        public address?: string,
    ) { }
}

let olli = new Person("Olli", 38);
let leni = new Person("Leni", 36);
let sigi = new Person("Sigi", 3);

let people: Person[] = [olli, leni, sigi];
// console.log(people);

console.log(people.find(x => x.age > 35));      // find first
console.log(people.filter(x => x.age < 37));    // filter all

console.log(olli.name + ', ' + olli.age);