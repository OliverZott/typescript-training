"use strict";
/**
 * Const vs Readonly
 *
 * - producing compile-time error
 * - property assignment vs variable assignment (with types)
 *
 */
const point = {
    x: 0,
    y: 0,
};
// variable assignment  --> ERROR
// point = { x: 1, y: 1 };
// property assignment (still working on const)
point.x = 1;
// point.y = 2; 
console.log(point);
//# sourceMappingURL=02_Readonly.js.map