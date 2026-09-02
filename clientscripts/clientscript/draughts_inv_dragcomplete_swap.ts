/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,draughts_inv_dragcomplete_swap]

function draughts_inv_dragcomplete_swap(intArg0: inv, intArg1: number, intArg2: number, intArg3: component): void {
    if (intArg2 == -1) {
        draughts_inv_draw_slot(intArg0, intArg1, intArg3, intArg1);
        return;
    }
    draughts_inv_draw_slot(intArg0, intArg1, intArg3, intArg2);
    draughts_inv_draw_slot(intArg0, intArg2, intArg3, intArg1);
}
