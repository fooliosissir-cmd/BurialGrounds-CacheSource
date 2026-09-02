/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,scrollbar_vertical_drag]

function scrollbar_vertical_drag(intArg0: component, intArg1: component, intArg2: number, intArg3: boolean): void {
    let int4: number = 0;
    let int5: number = 0;

    if (ccFind(intArg0, 1) == 1) {
        if (ccFind<1>(intArg0, 2) == 1) {
            ccSetPosition<1>(0, intArg2 + 16, 0, 0);
        }
        if (ccFind<1>(intArg0, 3) == 1) {
            ccSetPosition<1>(0, intArg2 + ccGetHeight() - 5 + 16, 0, 0);
        }
        int4 = ifGetHeight(intArg0) - 32 - ccGetHeight();
        if (int4 <= 0) {
            return;
        }
        int5 = ifGetScrollHeight(intArg1) - ifGetHeight(intArg1);
        intArg2 = intArg2 * int5 / int4;
        scrollbar_vertical_doscroll(intArg0, intArg1, intArg2, intArg3);
    }
}
