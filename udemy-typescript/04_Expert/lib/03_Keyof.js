"use strict";
/**
 * Used concepts:
 *      - 'keyof' Operator
 *      - Generics:
 *          <....>
 *      - Generic Constraints:
 *          <... extends keyof ...>
 *      - Lookup-Types:
 *          Obj[Key]
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getVal(obj, key) {
    const val = obj[key];
    console.log(`Key: ${key} - Value: ${val}`);
}
/** Generic version */
function getValGeneric(obj, key) {
    const val = obj[key];
    console.log(`Key: ${key} - Value: ${val}`);
    return val;
}
const olli = {
    name: "Olli",
    age: 38,
    location: "Tirol,"
};
const kosto = {
    color: "grey",
    nickname: "kosto"
};
getVal(olli, 'location');
getVal(olli, 'email');
getValGeneric(kosto, 'color');
/** Lookup-Type usage for setting */
function setValGeneric(obj, key, val) {
    console.log(`Setting key: ${key} to value: ${val}`);
    obj[key] = val;
}
setValGeneric(kosto, 'color', 'white');
getValGeneric(kosto, 'colo');
//# sourceMappingURL=03_Keyof.js.map