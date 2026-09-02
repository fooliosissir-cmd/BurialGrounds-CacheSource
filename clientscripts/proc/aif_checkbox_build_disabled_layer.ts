/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,aif_checkbox_build_disabled_layer]

function aif_checkbox_build_disabled_layer(intArg0: component, intArg1: graphic): void {
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(16384, 16384, 2, 2);
    ccSetPosition(0, 0, 1, 1);
    ccSetGraphic(intArg1);
    ifSetnoclickthrough(true, intArg0);
    ifSetHide(true, intArg0);
}
