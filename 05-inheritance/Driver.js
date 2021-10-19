"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var MyRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
// Declare empty array
var myShapes = [];
myShapes.push(myShape);
myShapes.push(myCircle);
myShapes.push(MyRectangle);
for (var _i = 0, myShapes_1 = myShapes; _i < myShapes_1.length; _i++) {
    var shape = myShapes_1[_i];
    console.log(shape);
    console.log(shape.getInfo());
}
