/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4975

function cs2_4975(intArg0: number): number {
    if (intArg0 > 0 && intArg0 < 300) {
        return 1;
    } else if (intArg0 > 300 && intArg0 < 600) {
        return 2;
    } else if (intArg0 > 600) {
        return 3;
    }
    return 0;
}
