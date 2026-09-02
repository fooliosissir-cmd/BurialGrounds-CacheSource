/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3169

function cs2_3169(intArg0: component, intArg1: number): void {
    ifSetHide(true, Component.interface_912.component_912_48);
    ifSetHide(true, Component.interface_912.component_912_30);

    if (ccFind(intArg0, intArg1) == 1) {
        ccSetOnMouseOver(noHook(""));
    }
}
