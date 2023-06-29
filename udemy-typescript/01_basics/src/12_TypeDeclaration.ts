/**
 * Some types are not present in codebase but are supposed to be provided by nodejs runtime. 
 * Typescript can provide definitions, which are not declared in TS codebase --> npm i @types/node     
 */

console.log(
    "User env var: " + process.env.USER
)

/**
 * declare var which is not present in typescript code-base
 *      - outsource declaration files to xxx.d.ts files
 */
// declare const process: any;




// -------------------------------------------------
/** File System module example */
import fs from 'fs'

fs.writeFileSync('hello.txt', 'Hello world');


// -------------------------------------------------
/** Express module example 
 * 
 *      After installation: 'npm i express' still error
 *      So install: npm i @types/express
*/
import express from 'express';
const app = express();
app.get('/', function (req, res) { res.send('Hello world.'); });
app.listen(3000, () => { console.log('Server started'); });


