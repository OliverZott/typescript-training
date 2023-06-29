/**
 * Some explainations:
 *      unknown is I don't know; any is I don't care .
 *      unknown is more-typesafe version of any  -->  JS standard "any"  --> better use unknown for typesafty!!
 *      Analogy to C#: any is like dynamic and unknown is like object.
 */

let exampleAny: any;
let exampleUnknown: unknown;
let exampleUndefined: undefined;
let exampleNull: any;


exampleAny = "blub";
exampleUnknown = false;
exampleUndefined = undefined;
exampleNull = null;

// exampleAny.do.any.shit.youwant();
exampleAny.trim();
// exampleUnknown.trim();
// exampleUndefined.trim();


if (exampleUnknown == 'boolean') {
    console.log(`exampleUnknown == 'boolean'`);
}

function checkNullOrUndefined(input: any) {
    if (input === null) {
        console.log(`Input === null`);
    } else if (typeof input === 'undefined') {
        console.log(`typeof input === undefined`)
    } else if (input == null) {
        console.log(`Input == null`);
    }
}

checkNullOrUndefined(exampleAny);
checkNullOrUndefined(exampleUndefined);
checkNullOrUndefined(exampleNull);





//  -----------------------------------------------------
/** Use unknown for typesafety inside functions, without blowing up the outer scope */

function log(value: unknown) {
    console.log(value.toFixed(2));
}

log(123.3);
log("Test");