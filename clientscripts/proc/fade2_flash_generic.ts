/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fade2_flash_generic]

function proc_fade2_flash_generic(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: colour): void {
    ifSetColour(intArg5, intArg0);
    ifSetTrans(intArg4, intArg0);
    ifSetOnTimer(hook(fade2_flash_timer, "Iiiii", [intArg0, 0 - intArg2, intArg1, intArg3, intArg4]), intArg0);
}
