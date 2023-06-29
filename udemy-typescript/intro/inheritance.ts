
class Type {
    typeName: string;

    constructor(typeName: string) {
        this.typeName = typeName;
    }
}

class Animal {
    name: string;
    type: Type;

    constructor(name: string, type: Type) {
        this.name = name;
        this.type = type;
    }

    toString(): void {
        console.log(this.name + " is an animal of type " + this.type.typeName);
    }
}

class SuperAnimal extends Animal {
    toString(): void {
        super.toString(); console.log("And is a SUPER animal =)");
    }
}

var kosto = new SuperAnimal("Kostolany", new Type("Cat"));

kosto.toString();