// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

let reviews: number[] = [3.1, 4.3, 4.9, 4.3, 2.5];
let sports: string[] = ["Hockey", "Basketball", "Downhill", "Football"];
for (let sport in sports) {
    console.log(sport);
}

// basics
let total = 0;
for (let i = 0; i < reviews.length; i++) {
    total += reviews[i];
}
let average = total / reviews.length;
console.log(`Average of reviews is ${average}`);


// adding to array
sports.push("Baseball");


// foreach equivalent  
for (let sport of sports) {
    if (sport == "Downhill") {
        console.log(`${sport} is awesome =)`);
    }
    else {
        console.log(sport)
    }
}

