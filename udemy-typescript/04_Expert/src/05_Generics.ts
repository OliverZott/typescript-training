/**
 * Generics with:
 *      - Partial / Required / Readonly
 */


/** Partial */
class State<T> {
    constructor(public current: T) { }

    update(next: Partial<T>) {
        this.current = { ...this.current, ...next };
    }
}

const state = new State({ x: 0, y: 0 });
state.update({ y: 4 });  // Partial -> no need to update 'x'
console.log(state);


/** Required */
type CircleConfig = {
    color?: string,
    radius?: number,
}

class Circle {
    private config: Required<CircleConfig>;

    constructor(config: CircleConfig) {
        this.config = {
            color: config.color ?? 'green',  // no need for additional null-checking later
            radius: config.radius ?? 0,
        }
    }
}


/** Readonly */
function makeReadonly<T>(obj: T): Readonly<T> {
    return Object.freeze({ ...obj });
}

const editablePoint = { x: 0, y: 0 };
editablePoint.x = 1;

const readonlyPoint = makeReadonly(editablePoint);
readonlyPoint.x = 32;