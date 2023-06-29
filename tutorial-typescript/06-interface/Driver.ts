import { Coach } from "./Coach";
import { MtbCoach } from "./MtbCoach";
import { SkiCoach } from "./SkiCoach";

let mtbCoach = new MtbCoach();
let skiCoach = new SkiCoach();

let coaches: Coach[] = [];

coaches.push(mtbCoach);
coaches.push(skiCoach);

for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
}
