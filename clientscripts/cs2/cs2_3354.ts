/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3354

function cs2_3354(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Bosses", 0];
        case 1:
            return ["Floors", 0];
        case 2:
            return ["Item Binding", 0];
        case 3:
            return ["Rewards", 0];
        case 4:
            return ["Areas", 0];
        case 5:
            return ["Milestones", 0];
        default:
            return ["", -1];
    }
}
