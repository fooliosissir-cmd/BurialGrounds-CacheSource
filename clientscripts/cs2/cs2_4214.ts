/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4214

function cs2_4214(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: number = ifGetTrans(intArg0);
    let int4: number = 0;

    if (intArg0 == -1) {
        return;
    }

    if (intArg2 == 0) {
        if (intArg1 == 1) {
            int4 = int3 + 22;
        } else if (intArg1 == 0) {
            int4 = int3 - 22;
        } else {
            ifSetOnTimer(noHook(""), intArg0);
            return;
        }
        int4 = max(int4, 0);
        int4 = min(int4, 255);
        ifSetTrans(int4, intArg0);
        if ((intArg1 == 1 && int4 == 255) || (intArg1 == 0 && int4 == 0)) {
            ifSetOnTimer(noHook(""), intArg0);
        } else {
            ifSetOnTimer(hook(cs2_4214, "Iii", [intArg0, intArg1, 0]), intArg0);
        }
    } else {
        ifSetOnTimer(hook(cs2_4214, "Iii", [intArg0, intArg1, intArg2 - 1]), intArg0);
    }
}
