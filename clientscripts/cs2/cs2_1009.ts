/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1009

function cs2_1009(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Bows", 0];
        case 1:
            return ["Thrown", 1];
        case 2:
            return ["Armour", 0];
        case 3:
            return ["Crossbows", 0];
        case 4:
            return ["Shortcuts", 1];
        case 5:
            return ["Salamanders", 1];
        case 6:
            return ["Areas", 1];
        case 7:
            return ["Other", 0];
        case 8:
            return ["Minigames", 1];
        case 9:
            return ["Dungeoneering", 0];
        case 10:
            return ["Milestones", 0];
        default:
            return ["", -1];
    }
}
