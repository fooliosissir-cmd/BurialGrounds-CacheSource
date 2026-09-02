/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4022

function cs2_4022(intArg0: component, intArg1: component): void {
    let int2: component = ifGetLayer(intArg0);
    let int3: graphic = ifGetfontmetrics(intArg0);
    let int4: number = ifGetWidth(ifGetLayer(int2));
    let int5: number = ifGetHeight(ifGetLayer(int2));
    let int6: number = paraheight(varcstr_359, int4, int3) * 15;

    if (int6 <= int5) {
        ifSetSize(0, int6, 1, 0, int2);
        ifSetPosition(0, 0, 1, 1, int2);
        ifSetSize(0, 0, 1, 1, intArg0);
        ifSetHide(true, intArg1);
        ccDeleteAll(intArg1);
    } else {
        int6 = paraheight(varcstr_359, int4 - 16, int3) * 15;
        ifSetSize(16, 0, 1, 1, int2);
        ifSetPosition(0, 0, 0, 0, int2);
        ifSetSize(0, int6, 1, 0, intArg0);
        ifSetScrollSize(0, int6, int2);
        ifSetScrollPos(0, 0, int2);
        ifSetHide(false, intArg1);
        ccDeleteAll(intArg1);
        proc_scrollbar_vertical(intArg1, int2, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    }
    ifSetText(varcstr_359, intArg0);
}
