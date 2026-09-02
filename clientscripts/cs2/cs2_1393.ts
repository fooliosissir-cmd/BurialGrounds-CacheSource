/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1393

function cs2_1393(intArg0: number): number {
    if (intArg0 <= 0) {
        return -1;
    }
    intArg0 = intArg0 - 1;
    let int1: number = invSize(94);

    if (intArg0 < int1) {
        return invGetNum(94, intArg0);
    }
    intArg0 = intArg0 - int1;

    if (intArg0 < invSize(93)) {
        return invGetNum(93, intArg0);
    }
    return -1;
}
