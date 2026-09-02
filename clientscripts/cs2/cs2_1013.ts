/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1013

function cs2_1013(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Allotments", 1];
        case 1:
            return ["Hops", 1];
        case 2:
            return ["Trees", 1];
        case 3:
            return ["Fruit Trees", 1];
        case 4:
            return ["Bushes", 1];
        case 5:
            return ["Flowers", 1];
        case 6:
            return ["Herbs", 1];
        case 7:
            return ["Special", 1];
        case 8:
            return ["Equipment", 1];
        case 9:
            return ["Other", 1];
        case 10:
            return ["Minigames", 1];
        case 11:
            return ["Dungeoneering", 1];
        case 12:
            return ["Milestones", 1];
        default:
            return ["", -1];
    }
}
