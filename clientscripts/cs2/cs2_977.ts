/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_977

function cs2_977(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Bronze", 0];
        case 1:
            return ["Iron", 0];
        case 2:
            return ["Steel", 0];
        case 3:
            return ["Black", 0];
        case 4:
            return ["White", 1];
        case 5:
            return ["Mithril", 0];
        case 6:
            return ["Adamant", 0];
        case 7:
            return ["Rune", 0];
        case 8:
            return ["Dragon", 0];
        case 9:
            return ["Barrows", 1];
        case 10:
            return ["Magic", 0];
        case 11:
            return ["Equipment", 0];
        case 12:
            return ["Minigames", 1];
        case 13:
            return ["Dungeoneering", 0];
        case 14:
            return ["Milestones", 0];
        default:
            return ["", -1];
    }
}
