"use strict";
class Person {
    constructor(_age) {
        // - Property pointing to arrow function to capture it from surrounding context.
        // - Because all property initializers execute at the end of te constructor, 
        //      so it will be bound to whatever instance is present within the constructor.
        this.growOld2 = () => {
            this._age++;
        };
        this._age = _age;
    }
    growOld() {
        this._age++;
    }
    age() {
        return this._age;
    }
}
const person = new Person(31);
// person.growOld();
// Method-to-variable Assignment !!!
const growOld = person.growOld;
const growOld2 = person.growOld2;
growOld(); // method is now invoked directly without the object-context --> RUNTIME ERROR
growOld2(); // method is now invoked directly without the object-context --> RUNTIME ERROR
console.log(person.age());
//# sourceMappingURL=01_This.js.map