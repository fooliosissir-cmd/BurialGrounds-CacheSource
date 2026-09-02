/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5584

function cs2_5584(intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    ifSetTrans(255, intArg1);
    ifSetOnKey(hook(cs2_5585, "izII", [event_keycode, event_keychar, intArg0, intArg1]), intArg0);

    if (intArg2 != -1) {
        ifSetSize(250, 30, 0, 0, intArg2);
        ifSetOnTimer(hook(cs2_5586, "II", [intArg2, intArg3]), intArg2);
    }
}
