/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,valentine_setup]

function valentine_setup(intArg0: component, intArg1: component, intArg2: component): void {
    let int3: number = paraheight(varcstr_343, ifGetWidth(intArg1), Graphic.p12_full) * 12 + 5;

    ifSetSize(0, int3, 1, 0, intArg1);
    ifSetScrollSize(0, int3, intArg0);
    ifSetScrollPos(0, 0, intArg0);
    ifSetText(varcstr_343, intArg1);

    if (int3 <= ifGetHeight(intArg0)) {
        ccDeleteAll(intArg2);
        ifSetHide(true, intArg2);
        return;
    }
    ifSetHide(false, intArg2);
    proc_scrollbar_vertical(intArg2, intArg0, Graphic.scrollbar_parchment_dragger_v2_3, Graphic.scrollbar_parchment_dragger_v2_0, Graphic.scrollbar_parchment_dragger_v2_1, Graphic.scrollbar_parchment_dragger_v2_2, Graphic.scrollbar_parchment_v2_0, Graphic.scrollbar_parchment_v2_1);
}
