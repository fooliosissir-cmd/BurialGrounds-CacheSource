/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3077

function cs2_3077(intArg0: component, intArg1: graphic, intArg2: graphic, intArg3: graphic, intArg4: graphic): void {
    cc_add_graphic(intArg0, 0, 16, 32, 0, 0, intArg1, false, false, false, 0);
    cc_add_graphic(intArg0, 1, 32, 32, 16, 0, intArg2, false, false, false, 0);
    ccSetSize(32, 32, 1, 0);
    cc_add_graphic(intArg0, 2, 16, 32, 0, 0, intArg1, true, false, false, 0);
    ccSetPosition(0, 0, 2, 0);
    cc_add_graphic(intArg0, 3, 16, 32, 0, 0, intArg3, false, false, false, 0);
    ccSetHide(true);
    cc_add_graphic(intArg0, 4, 32, 32, 16, 0, intArg4, false, false, false, 0);
    ccSetSize(32, 32, 1, 0);
    ccSetHide(true);
    cc_add_graphic(intArg0, 5, 16, 32, 0, 0, intArg3, true, false, false, 0);
    ccSetPosition(0, 0, 2, 0);
    ccSetHide(true);
    hookMouseEnter(hook(cs2_3078, "I", [intArg0]), intArg0);
    hookMouseExit(hook(cs2_3080, "I", [intArg0]), intArg0);
}
