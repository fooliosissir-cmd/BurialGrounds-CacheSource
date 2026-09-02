/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5475

function cs2_5475(strArg0: string, intArg0: component, intArg1: component, intArg2: component): void {
    ifSetScrollPos(0, 0, intArg1);
    let int3: number = paraheight(strArg0, ifGetWidth(intArg0), Graphic.p11_full);
    int3 = int3 * 12;
    ifSetScrollSize(0, int3, intArg1);

    if (int3 > ifGetHeight(intArg1)) {
        ifSetHide(false, intArg2);
        proc_scrollbar_vertical(intArg2, intArg1, Graphic.aif_scrollbar_dragger_5_3, Graphic.aif_scrollbar_dragger_5_0, Graphic.aif_scrollbar_dragger_5_1, Graphic.aif_scrollbar_dragger_5_2, Graphic.aif_scrollbar_arrow_5_1, Graphic.aif_scrollbar_arrow_5_0);
    } else {
        ifSetHide(true, intArg2);
    }
}
