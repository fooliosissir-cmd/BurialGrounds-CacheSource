/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1015

function cs2_1015(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Ores", 0];
        case 1:
            return ["Equipment", 0];
        case 2:
            return ["Other", 0];
        case 3:
            return ["Shooting Stars", 1];
        case 4:
            return ["Minigames", 1];
        case 5:
            return ["Dungeoneering", 0];
        case 6:
            return ["Milestones", 0];
        default:
            return ["", -1];
    }
}
