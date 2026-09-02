/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5655

function cs2_5655(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    if (intArg3 < 5) {
        intArg3 = intArg3 + 1;
        ifSetOnTimer(hook(cs2_5655, "IIii", [intArg0, intArg1, intArg2, intArg3]), intArg0);
        return;
    } else {
        intArg3 = 0;
        ifSetOnTimer(hook(cs2_5655, "IIii", [intArg0, intArg1, intArg2, intArg3]), intArg0);
    }
    let int4: number = scale(ifGetHeight(intArg0), 45, 100);
    let int5: number = scale(ifGetHeight(intArg1), 45, 100);

    if (intArg2 <= 50) {
        ifSetSize(ifGetWidth(intArg1), 0, 0, 0, intArg1);
        intArg2 = intArg2 * 2;
        if (int4 < intArg2) {
            ifSetSize(ifGetWidth(intArg0), min(ifGetHeight(intArg0) + 1, 45), 0, 0, intArg0);
        } else {
            ifSetOnTimer(noHook(""), intArg0);
        }
    } else if (int4 < 100) {
        ifSetSize(ifGetWidth(intArg0), min(ifGetHeight(intArg0) + 1, 45), 0, 0, intArg0);
    } else {
        if (int5 < (intArg2 - 50) * 2) {
            ifSetSize(ifGetWidth(intArg1), min(ifGetHeight(intArg1) + 1, 45), 0, 0, intArg1);
        }
        if (int5 >= (intArg2 - 50) * 2) {
            ifSetOnTimer(noHook(""), intArg0);
        }
    }
}
