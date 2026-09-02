/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2867

function cs2_2867(intArg0: coord, intArg1: coord): number {
    if (intArg0 == intArg1) {
        return 0;
    }

    if (coordX(intArg0) - coordX(intArg1) > 2 * (coordZ(intArg0) - coordZ(intArg1)) * -1) {
        if (coordX(intArg0) - coordX(intArg1) > 2 * (coordZ(intArg0) - coordZ(intArg1))) {
            return 7;
        } else if (2 * (coordX(intArg0) - coordX(intArg1)) > coordZ(intArg0) - coordZ(intArg1)) {
            return 6;
        } else if (2 * (coordX(intArg0) - coordX(intArg1)) > (coordZ(intArg0) - coordZ(intArg1)) * -1) {
            return 5;
        } else {
            return 4;
        }
    } else if (coordX(intArg0) - coordX(intArg1) > 2 * (coordZ(intArg0) - coordZ(intArg1))) {
        if (2 * (coordX(intArg0) - coordX(intArg1)) > coordZ(intArg0) - coordZ(intArg1)) {
            if (2 * (coordX(intArg0) - coordX(intArg1)) > (coordZ(intArg0) - coordZ(intArg1)) * -1) {
                return 8;
            } else {
                return 1;
            }
        } else {
            return 2;
        }
    } else {
        return 3;
    }
}
