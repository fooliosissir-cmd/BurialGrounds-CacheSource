/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_983

function cs2_983(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Weaponry", 1];
        case 1:
            return ["Armour", 1];
        case 2:
            return ["Shortcuts", 1];
        case 3:
            return ["Areas", 1];
        case 4:
            return ["Barbarian", 1];
        case 5:
            return ["Dungeoneering", 0];
        case 6:
            return ["Milestones", 0];
        case 7:
            return ["Minigames", 1];
        default:
            return ["", -1];
    }
}
