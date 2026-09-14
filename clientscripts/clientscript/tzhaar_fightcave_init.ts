/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,tzhaar_fightcave_init]

function tzhaar_fightcave_init(intArg0: component, intArg1: component, intArg2: component): void {
    if (varbit_1549 < 1 || varbit_1549 > 63) {
        ifSetHide(true, intArg1);
        ifSetHide(true, intArg2);
        return;
    }

    if (varbit_1549 == 63) {
        ifSetText("TzTok-Jad", intArg2);
    } else {
        ifSetText("Wave " + tostring(varbit_1549), intArg2);
    }
    let int3: number = 0 - ifGetHeight(intArg0);
    ifSetPosition(0, int3, 1, 1, intArg1);
    ifSetPosition(0, int3, 1, 1, intArg2);
    ifSetHide(false, intArg1);
    ifSetHide(false, intArg2);
    ifSetOnTimer(hook(cs2_1228, "IIIi", [intArg0, intArg1, intArg2, clientClock()]), intArg0);
    ifSetOp(1, "Dismiss", intArg1);
    ifSetOnOp(hook(cs2_1229, "iIII", [event_opindex, intArg0, intArg1, intArg2]), intArg1);
}
