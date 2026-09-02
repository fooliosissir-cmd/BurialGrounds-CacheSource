/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,if_highlight_cc]

function if_highlight_cc(intArg0: component): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = max(20, 2 + ccGetWidth());
    let int4: number = max(20, 2 + ccGetHeight());
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;

    if (cs2_6375() == 1) {
        int1 = cc_getx_absolute_toplevel() + ccGetWidth() / 2;
        int2 = cc_gety_absolute_toplevel() + ccGetHeight() / 2;
        if (ifFind(cs2_6358(intArg0)) == 1) {
            ccSetHide(false);
            [int5, int6, int7] = cs2_6373(int3, int4);
            ccSetSize(int5, int6, 0, 0);
            if_highlight_settrans(int7, intArg0);
            ccSetPosition(int1 - ccGetWidth() / 2, int2 - ccGetHeight() / 2, 0, 0);
        }
    } else {
        ifSetHide(true, cs2_6358(intArg0));
    }
}
