/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,scale_round]

function scale_round(intArg0: number, intArg1: number, intArg2: number): number {
    let int3: number = 0;
    let int4: number = 0;

    if (intArg1 == 0) {
        return 0;
    }

    if (intArg0 == 0 || intArg2 == 0) {
        return 0;
    }

    if (intArg0 / intArg1 >= 2147483647 / intArg2) {
        return 2147483647;
    } else if (intArg0 % intArg1 * (intArg2 % intArg1) % intArg1 > intArg1 / 2) {
        return scale(intArg0, intArg1, intArg2) + 1;
    } else {
        return scale(intArg0, intArg1, intArg2);
    }
}
