/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_focuslayer]

function clanwars_focuslayer(intArg0: component, intArg1: component, intArg2: component, intArg3: number): void {
    if (intArg2 == -1) {
        if (ccFind(intArg1, 1) == 1) {
            scrollbar_ondrag_doscroll(intArg1, intArg0, 0, 1);
        }
        return;
    }
    let int4: number = 0;

    if (ccFind(intArg2, intArg3) == 1 || (intArg3 == -1 && ifFind(intArg2) == 1)) {
        int4 = ccGetY() + ccGetHeight() / 2;
        int4 = int4 - ifGetHeight(intArg0) / 2;
        if (ccFind(intArg1, 1) == 1) {
            scrollbar_ondrag_doscroll(intArg1, intArg0, int4, 1);
        }
    }
}
