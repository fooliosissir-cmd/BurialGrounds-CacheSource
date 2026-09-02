/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_993

function cs2_993(intArg0: number): [string, number] {
    if (intArg0 == 0) {
        return ["Constitution", 0];
    }

    if (intArg0 == 1) {
        return ["Armour", 0];
    }

    if (intArg0 == 2) {
        return ["Milestones", 0];
    }
    return ["", -1];
}
