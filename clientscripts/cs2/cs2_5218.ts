/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5218

function cs2_5218(intArg0: component, intArg1: component, intArg2: number, intArg3: number, intArg4: component): void {
    let int5: number = 0;
    let int6: number = 0;

    ifSetHide(false, ifGetParentLayer(intArg0));

    if (intArg3 > 0) {
        ifSetOnTimer(hook(cs2_5218, "IIiiI", [intArg0, intArg1, intArg2, intArg3 - 1, intArg4]), intArg4);
        return;
    }

    if (ccFind(intArg0, 0) == 1) {
        int5 = ccGetTrans();
        if (intArg2 == 0) {
            int6 = int5 - 22;
        } else {
            int6 = int5 + 22;
        }
        int6 = max(int6, 0);
        int6 = min(int6, 255);
    }
    cs2_4161(intArg0, int6);
    cs2_4161(intArg1, int6);

    if (int6 == 0 && intArg2 == 0) {
        ifSetOnTimer(noHook(""), intArg4);
    } else if (int6 == 255 && intArg2 == 1) {
        ifSetOnTimer(noHook(""), intArg4);
        ifSetHide(true, ifGetParentLayer(intArg0));
    } else {
        ifSetOnTimer(hook(cs2_5218, "IIiiI", [intArg0, intArg1, intArg2, 0, intArg4]), intArg4);
    }
}
