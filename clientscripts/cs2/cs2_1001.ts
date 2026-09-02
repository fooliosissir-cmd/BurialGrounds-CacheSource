/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1001

function cs2_1001(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Potions", 1];
        case 1:
            return ["Herbs", 1];
        case 2:
            return ["Barbarian potions", 1];
        case 3:
            return ["Equipment", 1];
        case 4:
            return ["Other", 1];
        case 5:
            return ["Minigames", 1];
        case 6:
            return ["Dungeoneering", 1];
        case 7:
            return ["Milestones", 1];
        default:
            return ["", -1];
    }
}
