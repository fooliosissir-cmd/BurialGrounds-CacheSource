/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3087

function cs2_3087(intArg0: component, intArg1: number): void {
    ifSetHide(true, Component.interface_906.component_906_234);

    if (intArg1 < 0) {
        ifSetOnMouseRepeat(noHook(""), intArg0);
    } else if (ccFind(intArg0, intArg1) == 1) {
        ccSetOnMouseRepeat(noHook(""));
    }
}
