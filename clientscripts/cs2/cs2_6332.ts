/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6332

function cs2_6332(intArg0: number, intArg1: component, intArg2: component, intArg3: component): void {
    if (intArg0 == 1) {
        ifSetGraphic(Graphic.aif_info_button_1, intArg1);
        ifSetHide(false, intArg2);
        ifSetTrans(255, intArg3);
        ifSetOnTimer(hook(cs2_6333, "I", [event_com]), intArg3);
        return;
    }
    ifSetGraphic(Graphic.aif_info_button_0, intArg1);
    ifSetHide(true, intArg2);
    ifSetOnTimer(noHook(""), intArg3);
}
