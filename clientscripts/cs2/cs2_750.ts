/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_750

function cs2_750(intArg0: number): obj {
    if (intArg0 <= 0) {
        return -1;
    }
    intArg0 = intArg0 - 1;
    let int1: number = invSize(94);

    if (intArg0 < int1) {
        return invGetobj(94, intArg0);
    }
    intArg0 = intArg0 - int1;

    if (intArg0 < invSize(93)) {
        return invGetobj(93, intArg0);
    }
    return -1;
}
