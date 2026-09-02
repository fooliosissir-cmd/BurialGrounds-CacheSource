/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3292

function cs2_3292(intArg0: component, intArg1: component, intArg2: component): void {
    let int3: number = ifGetScrollY(intArg1) + 4;

    if (ccFind(intArg0, 1) == 1) {
        scrollbar_vertical_doscroll_2(intArg0, intArg1, intArg2, int3, true);
    }
}
