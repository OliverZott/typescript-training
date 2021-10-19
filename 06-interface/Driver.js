"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MtbCoach_1 = require("./MtbCoach");
var SkiCoach_1 = require("./SkiCoach");
var mtbCoach = new MtbCoach_1.MtbCoach();
var skiCoach = new SkiCoach_1.SkiCoach();
var coaches = [];
coaches.push(mtbCoach);
coaches.push(skiCoach);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var coach = coaches_1[_i];
    console.log(coach.getDailyWorkout());
}
