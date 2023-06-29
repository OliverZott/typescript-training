"use strict";
// TS has structural-typing ... it does not care about type-names if signature/structure is the same
let product = { id: "product 1" };
let user;
user = product;
console.log(user.id);
let point2d = { x: 11, y: 22 };
let point3d = { x: 1, y: 2, z: 3 };
let point3d2 = point2d;
point2d = point3d;
console.log("point2d: " + point2d);
console.log(point2d);
console.log("point3d version 2: " + point3d2);
console.log(point3d2);
// DUCK TYPING
function takes2D(point) { }
;
takes2D(point3d);
function takes3D(point) { }
;
takes3D(point2d); // ERROR
//# sourceMappingURL=06_StructuralTyping.js.map