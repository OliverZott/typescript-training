import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let MyRectangle = new Rectangle(0, 0, 3, 7);

// Declare empty array
let myShapes: Shape[] = [];

myShapes.push(myShape);
myShapes.push(myCircle);
myShapes.push(MyRectangle);

for (var shape of myShapes) {
    console.log(shape);
    console.log(shape.getInfo());
}