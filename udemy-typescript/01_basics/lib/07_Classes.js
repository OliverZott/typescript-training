"use strict";
// compile time error for private accessors.
class Animal {
    constructor(type, name) {
        this.name = name;
        this.type = type;
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}
class Bird extends Animal {
    fly(distance) {
        console.log(`${this.name} flew ${distance} miles.`);
    }
}
var cat = new Animal("Cat", "Kosto");
cat.move(70);
// cat.name = "blub";
var bird = new Bird("Redbreast", "Tim");
bird.fly(25);
//# sourceMappingURL=07_Classes.js.map