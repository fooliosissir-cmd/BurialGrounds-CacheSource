/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fade2_flash_timer]

function fade2_flash_timer(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    let int5: number = ifGetTrans(intArg0);
    let int6: number = min(max(int5 + intArg1, intArg3), intArg4);

    if (int6 == intArg3 || int6 == intArg4) {
        ifSetOnTimer(hook(fade2_flash_timer, "Iiiii", [intArg0, intArg2, intArg1, intArg3, intArg4]), intArg0);
    }
    ifSetTrans(int6, intArg0);
}
