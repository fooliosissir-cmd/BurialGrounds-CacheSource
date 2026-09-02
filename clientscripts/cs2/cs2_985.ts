/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_985

function cs2_985(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Firemaking", 0];
        case 1:
            return ["Barbarian fires", 1];
        case 2:
            return ["Pyre ships", 1];
        case 3:
            return ["Equipment", 0];
        case 4:
            return ["Beacons", 1];
        case 5:
            return ["Other", 0];
        case 6:
            return ["Minigames", 1];
        case 7:
            return ["Dungeoneering", 0];
        case 8:
            return ["Milestones", 0];
        default:
            return ["", -1];
    }
}
