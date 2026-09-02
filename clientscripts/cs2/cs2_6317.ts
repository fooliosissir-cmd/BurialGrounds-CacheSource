/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6317

function cs2_6317(intArg0: component, intArg1: component): void {
    let int2: component = ifGetLayer(intArg0);
    let int3: number = paraheight(varcstr_359, ifGetWidth(int2), ifGetfontmetrics(intArg0)) * 15 + 5;

    if (int3 <= ifGetHeight(int2)) {
        ccDeleteAll(intArg1);
        ifSetHide(true, intArg1);
        ifSetScrollSize(0, 0, int2);
        ifSetPosition(0, 0, 1, 1, int2);
        ifSetSize(0, 0, 1, 1, intArg0);
        ifSetTextAlign(1, 1, 0, intArg0);
    } else {
        ccDeleteAll(intArg1);
        ifSetHide(false, intArg1);
        ifSetScrollSize(0, int3, int2);
        ifSetPosition(0, 0, 0, 1, int2);
        ifSetSize(0, int3, 1, 0, intArg0);
        ifSetTextAlign(1, 0, 0, intArg0);
        proc_scrollbar_vertical(intArg1, int2, Graphic.scrollbar_parchment_dragger_v2_3, Graphic.scrollbar_parchment_dragger_v2_0, Graphic.scrollbar_parchment_dragger_v2_1, Graphic.scrollbar_parchment_dragger_v2_2, Graphic.scrollbar_parchment_v2_0, Graphic.scrollbar_parchment_v2_1);
    }
    ifSetScrollPos(0, 0, int2);
    ifSetText(varcstr_359, intArg0);
}
