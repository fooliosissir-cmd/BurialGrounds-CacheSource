/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_987

function cs2_987(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Equipment", 1];
        case 1:
            return ["Monsters", 1];
        case 2:
            return ["Slayer Masters", 1];
        case 3:
            return ["Dungeoneering", 1];
        case 4:
            return ["Milestones", 1];
        default:
            return ["", -1];
    }
}
