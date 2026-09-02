/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_870

function cs2_870(intArg0: component, intArg1: component, intArg2: graphic, intArg3: graphic, intArg4: graphic, intArg5: graphic, intArg6: graphic, intArg7: graphic): void {
    proc_scrollbar_vertical(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7);

    if (ccFind(intArg0, 1) == 1) {
        scrollbar_ondrag_doscroll(intArg0, intArg1, varc_109, 1);
    }
}
