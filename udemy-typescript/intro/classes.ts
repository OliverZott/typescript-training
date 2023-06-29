class People {
    static hometonw: string = "Tirol";
    name: string;
    age: number;

    constructor() {
        this.name;
        this.age;
    }

    hello() {
        console.log("Hi there :)");
    }

    thatsMe() {
        console.log(this.name + " is " + this.age + " old.");
    }
}

var olli = new People();
olli.age = 38;
olli.name = "Oliver"
olli.hello();
olli.thatsMe();