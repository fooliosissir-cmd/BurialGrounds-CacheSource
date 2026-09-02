/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_999

function cs2_999(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Weaving", 1];
        case 1:
            return ["Armour", 0];
        case 2:
            return ["Spinning", 0];
        case 3:
            return ["Pottery", 0];
        case 4:
            return ["Glass", 1];
        case 5:
            return ["Jewellery", 0];
        case 6:
            return ["Weaponry", 1];
        case 7:
            return ["Pyre ships", 1];
        case 8:
            return ["Objects", 1];
        case 9:
            return ["Other", 0];
        case 10:
            return ["Minigames", 1];
        case 11:
            return ["Dungeoneering", 0];
        case 12:
            return ["Milestones", 0];
        default:
            return ["", -1];
    }
}
