/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,scrollbar_vertical_drag_2]

function scrollbar_vertical_drag_2(intArg0: component, intArg1: component, intArg2: component, intArg3: number, intArg4: boolean): void {
    let int5: number = 0;
    let int6: number = 0;

    if (ccFind(intArg0, 1) == 1) {
        if (ccFind<1>(intArg0, 2) == 1) {
            ccSetPosition<1>(0, intArg3 + 16, 0, 0);
        }
        if (ccFind<1>(intArg0, 3) == 1) {
            ccSetPosition<1>(0, intArg3 + ccGetHeight() - 5 + 16, 0, 0);
        }
        int5 = ifGetHeight(intArg0) - 32 - ccGetHeight();
        int6 = ifGetScrollHeight(intArg1) - ifGetHeight(intArg1);
        intArg3 = intArg3 * int6 / int5;
        scrollbar_vertical_doscroll_2(intArg0, intArg1, intArg2, intArg3, intArg4);
    }
}
