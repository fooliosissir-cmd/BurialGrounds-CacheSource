/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4160

function cs2_4160(intArg0: component, intArg1: number, intArg2: number): void {
    if (intArg2 > 0) {
        ifSetOnTimer(hook(cs2_4159, "Iii", [event_com, intArg1, intArg2 - 1]), intArg0);
        return;
    }
    let int3: number = 0;
    let int4: number = 0;

    if (ccFind(intArg0, 0) == 1) {
        int3 = ccGetTrans();
        if (intArg1 == 0) {
            int4 = int3 - 22;
        } else {
            int4 = int3 + 22;
        }
        int4 = max(int4, 0);
        int4 = min(int4, 255);
    }

    if ((int4 == 0 && intArg1 == 0) || (int4 == 255 && intArg1 == 1)) {
        ifSetOnTimer(noHook(""), intArg0);
    } else {
        ifSetOnTimer(hook(cs2_4159, "Iii", [event_com, intArg1, 0]), intArg0);
    }
    cs2_4161(intArg0, int4);
}
