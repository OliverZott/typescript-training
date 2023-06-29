// compile time error for private accessors.

class Animal {
    protected name: string;
    private type: string;

    constructor(type: string, name: string) {
        this.name = name;
        this.type = type;
    }

    public move (distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Bird extends Animal {

    fly (distance: number) {
        console.log(`${this.name} flew ${distance} miles.`)
    }
}


var cat = new Animal("Cat", "Kosto");
cat.move(70);
// cat.name = "blub";

var bird = new Bird("Redbreast", "Tim");
bird.fly(25);