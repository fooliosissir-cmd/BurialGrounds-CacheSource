/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mm_reinit_refresh]

function mm_reinit_refresh(): void {
    let int0: number = -1;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;

    ifSetHide(false, Component.reinitialisation_puzzle.inv_layer);

    if (varc_mm_reinit_active == 1) {
        int0 = 221;
    } else {
        int0 = 222;
    }
    let int4: number = invSize(int0);

    if (int4 != 5 * 5) {
        mes("Nothing happens, as if something is wrong.");
        return;
    }

    while (int3 < int4) {
        cs2_1619(int1, int2, invGetobj(int0, int3));
        int1 = int1 + 1;
        if (int1 >= 5) {
            int1 = 0;
            int2 = int2 + 1;
        }
        int3 = int3 + 1;
    }
}
