/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5720

function cs2_5720(intArg0: component, intArg1: graphic): void {
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(16384, 16384, 2, 2);
    ccSetPosition(0, 0, 1, 1);
    ccSetGraphic(intArg1);
    ifSetnoclickthrough(true, intArg0);
    ifSetHide(true, intArg0);
}
