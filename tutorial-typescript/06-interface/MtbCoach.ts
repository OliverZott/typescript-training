import { Coach } from "./Coach";

export class MtbCoach implements Coach {

    getDailyWorkout(): string {
        return "Do 2hours 3x per wekk an Endurobike";
    }

}