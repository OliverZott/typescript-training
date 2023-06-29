"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Req = exports.point = void 0;
exports.point = { x: 1, y: 2, z: 3 };
class Req {
    constructor() {
        this.body = "body";
        this.json = "json";
    }
    toString() {
        console.log("This is Request class: " + this.body + ', ' + this.json);
    }
}
exports.Req = Req;
// our app
function handleRequest(req) {
    req.body;
    req.json;
}
let req1 = new Req();
req1.toString();
// ------------------------------------------------------------------------
// EXAMPLE 2 - interface declaration merging
//# sourceMappingURL=10_Interfaces.js.map