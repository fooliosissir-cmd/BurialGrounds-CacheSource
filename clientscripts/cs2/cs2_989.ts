/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_989

function cs2_989(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Trees", 0];
        case 1:
            return ["Hatchets", 0];
        case 2:
            return ["Canoes", 0];
        case 3:
            return ["Woodcraft", 1];
        case 4:
            return ["Other", 0];
        case 5:
            return ["Minigames", 1];
        case 6:
            return ["Dungeoneering", 0];
        case 7:
            return ["Milestones", 0];
        default:
            return ["", -1];
    }
}
