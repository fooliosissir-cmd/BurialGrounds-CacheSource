/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_401

function cs2_401(intArg0: component, intArg1: component, intArg2: component): void {
    let str0: string = varcstr_320;

    if (stringLength(varcstr_319) > 0 && varp_option_mouse == 1) {
        str0 = varcstr_319;
    }

    if (ccFind(intArg1, 0) == 1 && compare(str0, ccGetText()) == 0) {
        return;
    }
    ccDeleteAll(intArg0);
    ccDeleteAll(intArg1);
    ccDeleteAll(intArg2);
    let int3: number = ifGetWidth(intArg0);
    let int4: number = 0;
    ifSetScrollPos(0, 0, intArg1);
    ifSetPosition(int4, 0, 0, 1, intArg1);
    let int5: number = paraheight(str0, int3, Graphic.tutorial_font) * 12 + 3;

    if (int5 > ifGetHeight(intArg0)) {
        int3 = int3 - (ifGetWidth(intArg2) + 5);
        ifSetSize(int3, 0, 0, 1, intArg1);
        int5 = paraheight(str0, int3, Graphic.tutorial_font) * 12 + 3;
        ifSetScrollSize(0, int5, intArg1);
        ifSetHide(false, intArg2);
        proc_scrollbar_vertical(intArg2, intArg1, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    } else {
        int5 = ifGetHeight(intArg0);
        ifSetSize(int3, 0, 0, 1, intArg1);
        ifSetScrollSize(0, 0, intArg1);
        ifSetHide(true, intArg2);
    }
    ccCreate(intArg1, 4, 0);
    ccSetSize(0, int5, 1, 0);
    ccSetPosition(0, 0, 1, 0);
    ccSetTextFont(Graphic.tutorial_font);
    ccSetTextAlign(1, 1, 0);
    ccSetColour(colour(0x000000));
    ccSetTextShadow(false);
    ccSetText(str0);
    ifSetTextFont(Graphic.tutorial_font, Component.interface_200.component_200_4);
}
