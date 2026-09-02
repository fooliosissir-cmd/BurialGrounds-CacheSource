/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,warguild_overlay_arrow]

function proc_warguild_overlay_arrow(intArg0: component, intArg1: number): void {
    ifSetHide(false, intArg0);
    ifSetTrans(0, intArg0);

    if (intArg1 == 1) {
        ifSetGraphic(Graphic.red_green_arrows_0, intArg0);
        ifSetPosition(0, 22, 2, 0, intArg0);
    } else {
        ifSetGraphic(Graphic.red_green_arrows_1, intArg0);
        ifSetPosition(0, 1 - ifGetHeight(intArg0), 2, 0, intArg0);
    }
    ifSetOnTimer(hook(warguild_slide_arrow, "Ii", [intArg0, intArg1]), intArg0);
}
