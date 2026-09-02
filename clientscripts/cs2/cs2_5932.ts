/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5932

function cs2_5932(intArg0: number): number {
    if (intArg0 >= 0 && intArg0 < 15) {
        return 0;
    }

    if (intArg0 >= 15 && intArg0 < 50) {
        return 1;
    }

    if (intArg0 >= 50 && intArg0 < 79) {
        return 2;
    }

    if (intArg0 >= 79 && intArg0 < 114) {
        return 3;
    }

    if (intArg0 >= 114 && intArg0 < 130) {
        return 4;
    }

    if (intArg0 >= 130 && intArg0 < 166) {
        return 5;
    }

    if (intArg0 >= 166 && intArg0 < 188) {
        return 6;
    }

    if (intArg0 >= 188 && intArg0 < 222) {
        return 7;
    }

    if (intArg0 >= 222 && intArg0 < 239) {
        return 8;
    }

    if (intArg0 >= 239 && intArg0 < 272) {
        return 9;
    }

    if (intArg0 >= 272 && intArg0 < 303) {
        return 10;
    }

    if (intArg0 >= 303 && intArg0 < 322) {
        return 11;
    }

    if (intArg0 >= 322 && intArg0 <= 359) {
        return 12;
    }
    return -1;
}
