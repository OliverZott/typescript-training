interface People {
    name: string;
    age: number;
}

function printName(stark: People) {
    console.log(stark.name);
    console.log(stark.age);
}


printName({ name: "olli", age: 21 });
printName({ name: "leni" });
