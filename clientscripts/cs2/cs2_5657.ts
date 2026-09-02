/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5657

function cs2_5657(intArg0: component, intArg1: number, intArg2: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        if (intArg2 < 10) {
            intArg2 = intArg2 + 1;
            ccSetOnTimer(hook(cs2_5657, "Iii", [intArg0, intArg1, intArg2]));
            return;
        }
        if (ccGetTrans() < 255) {
            ccSetTrans(min(ccGetTrans() + 2, 255));
            ccSetPosition(0, max(ccGetY() - 4, 0), 1, 0);
        }
        if (ccGetTrans() >= 255) {
            ccDelete();
        } else {
            ccSetOnTimer(hook(cs2_5657, "Iii", [intArg0, intArg1, intArg2]));
        }
    }
}
