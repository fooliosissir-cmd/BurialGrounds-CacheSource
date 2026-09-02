/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1003

function cs2_1003(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Prayers", 0];
        case 1:
            return ["Equipment", 1];
        case 2:
            return ["Dungeoneering", 0];
        case 3:
            return ["Milestones", 0];
        default:
            return ["", -1];
    }
}
