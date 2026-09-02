/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,evq_flash_timer]

function evq_flash_timer(intArg0: number, intArg1: component): void {
    let int2: number = ifGetTrans(intArg1);
    let int3: number = min(max(int2 + intArg0 * 1, 225), 255);

    if (int3 == 225 || int3 == 255) {
        ifSetOnTimer(hook(evq_flash_timer, "iI", [0 - intArg0, intArg1]), intArg1);
    }
    ifSetTrans(int3, intArg1);
}
