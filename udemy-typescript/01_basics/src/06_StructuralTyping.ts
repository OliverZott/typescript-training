// TS has structural-typing ... it does not care about type-names if signature/structure is the same


// Example 1
type User = { id: string };
type Product = { id: string };

let product: Product = { id: "product 1" }
let user: User;

user = product;

console.log(user.id)



// Example 2 - extra information is OK
type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };

let point2d: Point2D = { x: 11, y: 22 };
let point3d: Point3D = { x: 1, y: 2, z: 3 };

let point3d2 = point2d;
point2d = point3d;

console.log("point2d: " + point2d)
console.log(point2d)
console.log("point3d version 2: " + point3d2)
console.log(point3d2)



// DUCK TYPING
function takes2D (point: Point2D) {/* ... */ };
takes2D(point3d);

function takes3D (point: Point3D) {/* ... */ };
takes3D(point2d);   // ERROR
