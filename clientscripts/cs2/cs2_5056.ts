/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5056

function cs2_5056(intArg0: component, intArg1: number): void {
    if (intArg1 == 1) {
        if (ccFind(intArg0, 0) == 1) {
            ccSetGraphic(Graphic.aif_accordion_button_2_10);
        }
        if (ccFind(intArg0, 1) == 1) {
            ccSetGraphic(Graphic.aif_accordion_button_2_9);
        }
        if (ccFind(intArg0, 2) == 1) {
            ccSetGraphic(Graphic.aif_accordion_button_2_11);
        }
        if (ccFind(intArg0, 3) == 1) {
            ccSetGraphic(Graphic.aif_accordion_arrows_1);
        }
        ifSetOnMouseOver(noHook(""), intArg0);
        hookMouseExit(noHook(""), intArg0);
    } else {
        cs2_5058(intArg0, false);
        if (ccFind(intArg0, 3) == 1) {
            ccSetGraphic(Graphic.aif_accordion_arrows_0);
        }
        ifSetOnMouseOver(hook(cs2_5057, "I1", [event_com, true]), intArg0);
        hookMouseExit(hook(cs2_5057, "I1", [event_com, false]), intArg0);
    }
}
