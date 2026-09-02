/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4411

function cs2_4411(intArg0: component, intArg1: number, intArg2: number, intArg3: number): void {
    if (intArg0 == -1) {
        return;
    }
    let int4: number = 0;
    let int5: number = 0;

    if (ccFind(intArg0, intArg1) == 1) {
        int4 = ccGetTrans();
        if (intArg3 == 0) {
            if (intArg2 == 1) {
                int5 = int4 + 22;
            } else if (intArg2 == 0) {
                int5 = int4 - 22;
            } else {
                ccSetOnTimer(noHook(""));
                return;
            }
            int5 = max(int5, 0);
            int5 = min(int5, 255);
            ccSetTrans(int5);
            if ((intArg2 == 1 && int5 == 255) || (intArg2 == 0 && int5 == 0)) {
                ccSetOnTimer(noHook(""));
            } else {
                ccSetOnTimer(hook(cs2_4411, "Iiii", [intArg0, intArg1, intArg2, 0]));
            }
        } else {
            ifSetOnTimer(hook(cs2_4411, "Iiii", [intArg0, intArg1, intArg2, intArg3 - 1]), intArg0);
        }
    }
}
