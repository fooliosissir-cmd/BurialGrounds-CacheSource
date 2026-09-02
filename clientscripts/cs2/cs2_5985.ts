/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5985

function cs2_5985(intArg0: component): void {
    ccDeleteAll(intArg0);
    let int1: number = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 3, ifGetNextSubId(intArg0));
    ccSetColour(colour(0xFFFFFF));
    ccSetfill(true);
    ccSetPosition(2, 2, 0, 0);
    ccSetSize(4, 4, 1, 1);
    ccSetTrans(255);
    ccHookMouseEnter(hook(cc_settrans, "Iii", [intArg0, int1, 180]));
    ccHookMouseExit(hook(cc_settrans, "Iii", [intArg0, int1, 255]));
}
