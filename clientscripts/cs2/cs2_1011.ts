/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1011

function cs2_1011(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Runes", 0];
        case 1:
            return ["Multiple Runes", 0];
        case 2:
            return ["Equipment", 0];
        case 3:
            return ["Other", 0];
        case 4:
            return ["Minigames", 0];
        case 5:
            return ["Dungeoneering", 0];
        case 6:
            return ["Milestones", 0];
        default:
            return ["", -1];
    }
}
