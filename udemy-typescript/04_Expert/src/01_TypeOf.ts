const center = {
    x: 0,
    y: 0,
    z: 0,
};

// long version
type point1 = {
    x: number,
    y: number,
    z: number,
};

// shorter
type point2 = typeof center;

const myPoint: point2 = {
    x: center.x + 1,
    y: center.y + 1,
    z: center.z + 1,
}

// Inline usage
const myPoint2: typeof center = {
    x: center.x + 1,
    y: center.y + 1,
    z: center.z + 1,
}



/**
 * Example: Copy JSON string in object
 */
const personResponse = {
    "name": "name_value",
    "age": "age_value",
};

function processResponse(person: typeof personResponse) {
    console.log(person.name, person.age);
}