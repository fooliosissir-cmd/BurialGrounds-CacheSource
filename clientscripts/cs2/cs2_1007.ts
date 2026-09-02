/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1007

function cs2_1007(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Courses", 1];
        case 1:
            return ["Areas", 1];
        case 2:
            return ["Shortcuts", 1];
        case 3:
            return ["Barbarian", 1];
        case 4:
            return ["Multiple Catch", 1];
        case 5:
            return ["Multiple Pickpocket", 1];
        case 6:
            return ["Barehanded", 1];
        case 7:
            return ["Other", 1];
        case 8:
            return ["Dungeoneering", 1];
        case 9:
            return ["Milestones", 1];
        default:
            return ["", -1];
    }
}
