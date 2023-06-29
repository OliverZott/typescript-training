// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
var reviews = [3.1, 4.3, 4.9, 4.3, 2.5];
var sports = ["Hockey", "Basketball", "Downhill", "Football"];
for (var sport in sports) {
    console.log(sport);
}
// basics
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Average of reviews is " + average);
// adding to array
sports.push("Baseball");
// foreach equivalent  
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == "Downhill") {
        console.log(sport + " is awesome =)");
    }
    else {
        console.log(sport);
    }
}
