import { Request } from './10_Interfaces';
/**
 * Interfaces
 * 
 * - not part of JS
 * - only used for type-hierarchies
 * - Interface Declaring Merging
 * 
 */
export { };


// ------------------------------------------------------------------------
// EXAMPLE 1
interface Point2d {
    x: number,
    y: number,
}

interface Point3d extends Point2d {
    z: number,
}

export const point: Point3d = { x: 1, y: 2, z: 3 }



// ------------------------------------------------------------------------
// EXAMPLE 2 - interface declaration merging

// express base
export interface Request {
    body: any;
    toString(): void
}
// express json
export interface Request {
    json: any;
}

export class Req implements Request {
    body = "body";
    json = "json";
    toString() {
        console.log("This is Request class: " + this.body + ', ' + this.json);
    }
}

// our app
function handleRequest(req: Request) {
    req.body;
    req.json;
}

let req1 = new Req();
req1.toString();

// ------------------------------------------------------------------------
// EXAMPLE 2 - interface declaration merging