"use strict";
/**
 * Some types are not present in codebase but are supposed to be provided by nodejs runtime.
 * Typescript can provide definitions, which are not declared in TS codebase --> npm i @types/node
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("User env var: " + process.env.USER);
/**
 * declare var which is not present in typescript code-base
 *      - outsource declaration files to xxx.d.ts files
 */
// declare const process: any;
// -------------------------------------------------
/** File System module example */
const fs_1 = __importDefault(require("fs"));
fs_1.default.writeFileSync('hello.txt', 'Hello world');
// -------------------------------------------------
/** Express module example
 *
 *      After installation: 'npm i express' still error
 *      So install: npm i @types/express
*/
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', function (req, res) { res.send('Hello world.'); });
app.listen(3000, () => { console.log('Server started'); });
//# sourceMappingURL=12_TypeDeclaration.js.map