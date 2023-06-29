"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
let olli = new Person("Olli", 38);
let leni = new Person("Leni", 36);
let sigi = new Person("Sigi", 3);
let people = [olli, leni, sigi];
// console.log(people);
console.log(people.find(x => x.age > 35)); // find first
console.log(people.filter(x => x.age < 37)); // filter all
console.log(olli.name + ', ' + olli.age);
//# sourceMappingURL=06_ClassProperties.js.map