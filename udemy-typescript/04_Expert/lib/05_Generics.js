"use strict";
/**
 * Generics with:
 *      - Partial / Required / Readonly
 */
/** Partial */
class State {
    constructor(current) {
        this.current = current;
    }
    update(next) {
        this.current = Object.assign(Object.assign({}, this.current), next);
    }
}
const state = new State({ x: 0, y: 0 });
state.update({ y: 4 }); // Partial -> no need to update 'x'
console.log(state);
class Circle {
    constructor(config) {
        var _a, _b;
        this.config = {
            color: (_a = config.color) !== null && _a !== void 0 ? _a : 'green',
            radius: (_b = config.radius) !== null && _b !== void 0 ? _b : 0,
        };
    }
}
/** Readonly */
function makeReadonly(obj) {
    return Object.freeze(Object.assign({}, obj));
}
const editablePoint = { x: 0, y: 0 };
editablePoint.x = 1;
const readonlyPoint = makeReadonly(editablePoint);
readonlyPoint.x = 32;
//# sourceMappingURL=05_Generics.js.map