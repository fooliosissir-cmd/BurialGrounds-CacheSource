/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6326

function cs2_6326(intArg0: number, intArg1: component, intArg2: component): void {
    if (intArg0 == 1) {
        ifSetGraphic(Graphic.aif_treasure_chest_buttons_2, intArg1);
        ifSetTrans(100, intArg1);
        ifSetHide(true, intArg2);
        ifSetTrans(255, intArg2);
        ifClearscripthooks(intArg1);
        ifClearscripthooks(intArg2);
    } else {
        ifSetGraphic(Graphic.aif_treasure_chest_buttons_0, intArg1);
        ifSetTrans(100, intArg1);
        ifSetHide(false, intArg2);
        ifSetOnMouseRepeat(hook(cs2_6327, "I", [event_com]), intArg2);
        ifSetOnOp(hook(cs2_6329, "iI", [event_opindex, intArg2]), intArg1);
    }
}
