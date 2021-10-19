import { Coach } from "./Coach";

export class SkiCoach implements Coach {

    getDailyWorkout(): string {
        return "6 hours of skiing on weekends!";
    }

}