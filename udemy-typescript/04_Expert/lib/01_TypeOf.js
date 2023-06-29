"use strict";
const center = {
    x: 0,
    y: 0,
    z: 0,
};
const myPoint = {
    x: center.x + 1,
    y: center.y + 1,
    z: center.z + 1,
};
// Inline usage
const myPoint2 = {
    x: center.x + 1,
    y: center.y + 1,
    z: center.z + 1,
};
/**
 * Example: Copy JSON string in object
 */
const personResponse = {
    "name": "name_value",
    "age": "age_value",
};
function processResponse(person) {
    console.log(person.name, person.age);
}
//# sourceMappingURL=01_TypeOf.js.map