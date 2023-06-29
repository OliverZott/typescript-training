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


export type Person = {
    name: string,
    age: number,
    location: string,
}
export type Cat = {
    nickname: string,
    color: string,
}
function getVal(obj: any, key: keyof Person) {
    const val = obj[key];
    console.log(`Key: ${key} - Value: ${val}`)
}
/** Generic version */
function getValGeneric<Obje, Key extends keyof Obje>(obj: Obje, key: Key) {
    const val = obj[key];
    console.log(`Key: ${key} - Value: ${val}`)
    return val;
}


const olli: Person = {
    name: "Olli",
    age: 38,
    location: "Tirol,"
}
const kosto: Cat = {
    color: "grey",
    nickname: "kosto"
}
getVal(olli, 'location');
getVal(olli, 'email');
getValGeneric(kosto, 'color');


/** Lookup-Type usage for setting */
function setValGeneric<Obj, Key extends keyof Obj>(obj: Obj, key: Key, val: Obj[Key]) {
    console.log(`Setting key: ${key} to value: ${val}`);
    obj[key] = val;
}

setValGeneric(kosto, 'color', 'white');
getValGeneric(kosto, 'colo');