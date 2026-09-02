/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,tzkiln_fightkiln_init]

function tzkiln_fightkiln_init(intArg0: component, intArg1: component, intArg2: component): void {
    if (varbit_tzkiln_current_wave < 1 || varbit_tzkiln_current_wave > 37) {
        ifSetHide(true, intArg1);
        ifSetHide(true, intArg2);
        return;
    }

    if (varbit_tzkiln_current_wave == 37) {
        ifSetText("Har-Aken", intArg2);
    } else {
        ifSetText("Wave " + tostring(varbit_tzkiln_current_wave), intArg2);
    }
    let int3: number = 0 - ifGetHeight(intArg0);
    ifSetPosition(0, int3, 1, 1, intArg1);
    ifSetPosition(0, int3, 1, 1, intArg2);
    ifSetHide(false, intArg1);
    ifSetHide(false, intArg2);
    ifSetOnTimer(hook(cs2_1228, "IIIi", [intArg0, intArg1, intArg2, clientClock()]), intArg0);
    ifSetOp(1, "Dismiss", intArg1);
    ifSetOnOpt(hook(cs2_1229, "iIII", [event_opindex, intArg0, intArg1, intArg2]), intArg1);
}
