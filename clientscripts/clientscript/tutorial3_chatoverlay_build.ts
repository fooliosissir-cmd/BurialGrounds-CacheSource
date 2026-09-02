/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,tutorial3_chatoverlay_build]

function tutorial3_chatoverlay_build(intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    let int4: number = ifGetHide(intArg1);
    let int5: number = 0;

    if (varbit_tutorial3_skipoffered == 1 && varp_tutorial < 1000) {
        if (int4 == 1) {
            int5 = 1;
        }
        ifSetHide(false, intArg1);
        ifSetSize(0, ifGetHeight(intArg1) + 1, 1, 1, intArg0);
    } else {
        if (int4 == 0) {
            int5 = 1;
        }
        ifSetHide(true, intArg1);
        ifSetSize(0, 0, 1, 1, intArg0);
    }
    let str0: string = varcstr_tutorial3_2buttonstring;

    if (stringLength(varcstr_tutorial3_1buttonstring) > 0 && varp_option_mouse == 1) {
        str0 = varcstr_tutorial3_1buttonstring;
    }
    let int6: obj = -1;

    if (ccFind(intArg0, 0) == 1) {
        int6 = ccGetInvObject();
    }
    let int7: graphic = -1;

    if (ccFind(intArg0, 1) == 1) {
        int7 = ccGetGraphic();
    }

    if (ccFind(intArg2, 0) == 1 && compare(str0, ccGetText()) == 0 && int6 == varc_tutorial3_object && int7 == varc_tutorial3_graphic && int5 == 0) {
        return;
    }
    ccDeleteAll(intArg0);
    ccDeleteAll(intArg2);
    ccDeleteAll(intArg3);
    let int8: number = ifGetWidth(intArg0);

    if (int8 <= 0) {
        return;
    }
    let int9: number = 0;
    let int10: number = 0;

    if (varc_tutorial3_object != -1) {
        ccCreate(intArg0, 6, 0);
        ccSetSize(varc_tutorial3_imagewidth, varc_tutorial3_imageheight, 0, 0);
        if (varc_tutorial3_imagewidth < 70) {
            int10 = (70 - varc_tutorial3_imagewidth) / 2;
        }
        ccSetPosition(int10, 0, 0, 1);
        ccSetObjectNonum(varc_tutorial3_object, 1);
        int9 = max(varc_tutorial3_imagewidth, 70) + 5;
        int8 = int8 - int9;
        ccCreate(intArg0, 3, 1);
        ccSetSize(0, 0, 0, 0);
        ccSetPosition(0, 0, 0, 1);
        ccSetHide(true);
    } else if (varc_tutorial3_graphic != -1) {
        ccCreate(intArg0, 3, 0);
        ccSetSize(0, 0, 0, 0);
        ccSetPosition(0, 0, 0, 1);
        ccSetHide(true);
        ccCreate(intArg0, 5, 1);
        ccSetSize(varc_tutorial3_imagewidth, varc_tutorial3_imageheight, 0, 0);
        if (varc_tutorial3_imagewidth < 70) {
            int10 = (70 - varc_tutorial3_imagewidth) / 2;
        }
        ccSetPosition(int10, 0, 0, 1);
        ccSetGraphic(varc_tutorial3_graphic);
        int9 = max(varc_tutorial3_imagewidth, 70) + 5;
        int8 = int8 - int9;
    }
    ifSetScrollPos(0, 0, intArg2);
    ifSetPosition(int9, 0, 0, 1, intArg2);
    let int11: number = paraheight(str0, int8, Graphic.tutorial_font) * 12 + 3;

    if (int11 > ifGetHeight(intArg0)) {
        int8 = int8 - (ifGetWidth(intArg3) + 5);
        ifSetSize(int8, 0, 0, 1, intArg2);
        int11 = paraheight(str0, int8, Graphic.tutorial_font) * 12 + 3;
        ifSetScrollSize(0, int11, intArg2);
        ifSetHide(false, intArg3);
        proc_scrollbar_vertical(intArg3, intArg2, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    } else {
        int11 = ifGetHeight(intArg0);
        ifSetSize(int8, 0, 0, 1, intArg2);
        ifSetScrollSize(0, 0, intArg2);
        ifSetHide(true, intArg3);
    }
    ccCreate(intArg2, 4, 0);
    ccSetSize(0, int11, 1, 0);
    ccSetPosition(0, 0, 1, 0);
    ccSetTextFont(Graphic.tutorial_font);
    ccSetTextAlign(1, 1, 0);
    ccSetColour(colour(0x000000));
    ccSetTextShadow(false);
    ccSetText(str0);
}
