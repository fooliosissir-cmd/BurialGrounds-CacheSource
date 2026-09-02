/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_979

function cs2_979(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Arrows", 1];
        case 1:
            return ["Bows", 1];
        case 2:
            return ["Bolts", 1];
        case 3:
            return ["Darts", 1];
        case 4:
            return ["Crossbows", 1];
        case 5:
            return ["Other", 1];
        case 6:
            return ["Minigames", 1];
        case 7:
            return ["Dungeoneering", 1];
        case 8:
            return ["Milestones", 1];
        default:
            return ["", -1];
    }
}
