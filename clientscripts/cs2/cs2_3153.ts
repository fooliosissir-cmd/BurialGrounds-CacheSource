/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3153

function cs2_3153(intArg0: component, intArg1: number): void {
    ifSetHide(true, Component.interface_910.component_910_14);

    if (intArg1 < 0) {
        ifSetOnMouseOver(noHook(""), intArg0);
    } else if (ccFind(intArg0, intArg1) == 1) {
        ccSetOnMouseOver(noHook(""));
    }
}
