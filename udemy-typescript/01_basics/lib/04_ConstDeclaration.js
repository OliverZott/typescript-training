"use strict";
const point = { x: 12, y: 15 };
// point = { x: 15, y: 136 };  // Error, because it would blow up at runtime in JS
// other behaviors are the same as in JS
point.x = 99;
point.y = 'blub';
console.log("x: " + point.x + " and y: " + point.y);
//# sourceMappingURL=04_ConstDeclaration.js.map