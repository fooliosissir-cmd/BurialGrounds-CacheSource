/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,scrollbar_resize_2]

function scrollbar_resize_2(intArg0: component, intArg1: component, intArg2: component, intArg3: number): void {
    let int4: number = ifGetScrollHeight(intArg1);
    let int5: number = ifGetHeight(intArg0);
    let int6: number = int5 - 32;
    let int7: number = 0;

    if (int4 > 0) {
        int7 = int6 * int5 / int4;
    } else {
        int7 = int6;
    }

    if (int7 < 10) {
        int7 = 10;
    }

    if (ccFind(intArg0, 1) == 1) {
        ccSetSize(16, int7, 0, 0);
        scrollbar_vertical_doscroll_2(intArg0, intArg1, intArg2, intArg3, true);
    }
}
