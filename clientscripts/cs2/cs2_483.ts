/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_483

function cs2_483(intArg0: number): string {
    switch (intArg0) {
        case 1:
            return "Scout";
        case 2:
            return "Foot Soldier";
        case 3:
            return "Halberdier";
        case 4:
            return "Archer";
        case 5:
            return "Mage";
        case 6:
            return "Knight";
        case 7:
            return "Champion";
        default:
            return "No Troop";
    }
}
