/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,scrollbar_vertical_wheel_2]

function scrollbar_vertical_wheel_2(intArg0: component, intArg1: component, intArg2: component, intArg3: number): void {
    let int4: number = ifGetScrollY(intArg1) + intArg3 * 45;

    if (ccFind(intArg0, 1) == 1) {
        scrollbar_vertical_doscroll_2(intArg0, intArg1, intArg2, int4, true);
    }
}
