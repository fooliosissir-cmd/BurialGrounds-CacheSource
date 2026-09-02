/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fade2_timer]

function fade2_timer(intArg0: number, intArg1: component): void {
    let int2: number = ifGetTrans(intArg1);
    let int3: number = min(max(int2 + intArg0, 0), 255);

    ifSetTrans(int3, intArg1);

    if (int3 == 0 || int3 == 255) {
        ifSetOnTimer(noHook(""), intArg1);
    }
}
