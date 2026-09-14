/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4147

function cs2_4147(intArg0: component, intArg1: number, intArg2: number, strArg0: string): void {
    ifSetHide(false, intArg0);
    ifSetPauseText(strArg0, intArg0);
    ifSetSize(16, intArg1, 1, 0, intArg0);
    ifSetPosition(0, intArg2, 1, 1, intArg0);
    cs2_4149(intArg0, strArg0, false);
    ifSetOnMouseRepeat(hook(cs2_4148, "Is1", [intArg0, strArg0, true]), intArg0);
    ifSetOnMouseLeave(hook(cs2_4148, "Is1", [intArg0, strArg0, false]), intArg0);
}
