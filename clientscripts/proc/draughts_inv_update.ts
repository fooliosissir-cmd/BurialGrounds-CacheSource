/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,draughts_inv_update]

function proc_draughts_inv_update(intArg0: component, intArg1: inv, intArg2: number, intArg3: number): void {
    ccDeleteAll(intArg0);
    let int4: number = (ifGetWidth(intArg0) - 36 * intArg2) / (intArg2 - 1);
    let int5: number = (ifGetHeight(intArg0) - 32 * intArg3) / (intArg3 - 1);
    let int6: number = 0;

    while (int6 <= intArg2 * intArg3) {
        ccCreate(intArg0, 5, int6);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition((36 + int4) * (int6 % intArg2), int6 / intArg2 * (32 + int5), 0, 0);
        draughts_inv_draw_slot(intArg1, int6, intArg0, int6);
        int6 = int6 + 1;
    }
}
