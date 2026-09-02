/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,scrollbar_vertical_text]

function scrollbar_vertical_text(intArg0: component, intArg1: component, intArg2: graphic, intArg3: number): void {
    if (intArg3 == 0) {
        intArg3 = 12;
    }
    let int4: number = paraheight(ifGetText(intArg1), ifGetWidth(intArg1) + 16, intArg2);
    int4 = int4 * intArg3;
    mes("txt " + tostring(int4) + ", layer " + tostring(ifGetHeight(intArg1)));

    if (ifGetHeight(intArg1) >= int4) {
        mes("No scroll txt " + tostring(int4) + ", layer " + tostring(ifGetHeight(intArg1)));
        ifSetSize(ifGetWidth(intArg1) + 16, ifGetHeight(intArg1), 0, 0, intArg1);
        ifSetHide(true, intArg0);
    } else {
        int4 = paraheight(ifGetText(intArg1), ifGetWidth(intArg1), intArg2);
        int4 = int4 * intArg3;
        ifSetScrollSize(0, int4 + 10, intArg1);
        mes("Scroll txt " + tostring(int4) + ", layer " + tostring(ifGetHeight(intArg1)));
        proc_scrollbar_vertical(intArg0, intArg1, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    }
}
