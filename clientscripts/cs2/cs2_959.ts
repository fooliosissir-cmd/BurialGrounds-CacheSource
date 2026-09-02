/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_959

function cs2_959(intArg0: component, intArg1: component, intArg2: number): void {
    ccDeleteAll(intArg0);
    defineArray(0, type_component, 64);
    let int3: number = 0;
    let int4: component = -1;
    let int5: number = 0;

    while (int5 < 64) {
        int4 = enumOp(type_int, type_component, Enum.enum_1467, int5);
        if (stringLength(ifGetText(int4)) > 0) {
            ifSetHide(false, int4);
            array0[int3] = int4;
            int3 = int3 + 1;
        } else {
            ifSetHide(true, int4);
        }
        int5 = int5 + 1;
    }

    if (int3 > 1) {
        if (intArg2 == 0) {
            quicksort(0, 0, int3 - 1);
        } else {
            quicksort_enum(0, 0, int3 - 1, Enum.enum_1466);
        }
    }
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = ifGetWidth(int4);
    int5 = 0;

    while (int5 < int3) {
        int4 = array0[int5];
        int7 = paraheight(ifGetText(int4), int8, Graphic.p12_full);
        int7 = 12 * int7 + 10;
        ifSetTextFont(Graphic.p12_full, int4);
        ifSetSize(int8, int7, 0, 0, int4);
        ifSetPosition(0, int6, 0, 0, int4);
        ccCreate(intArg0, 4, int5);
        ccSetSize(int8, int7, 0, 0);
        ccSetPosition(0, int6, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetColour(colour(0xDF0F0F));
        ccSetTextShadow(true);
        ccSetTextAlign(0, 0, 0);
        ccSetText(enumOp(type_component, type_string, Enum.enum_1466, int4));
        int6 = int6 + int7;
        int5 = int5 + 1;
    }
    int4 = enumOp(type_int, type_component, Enum.enum_1467, 64);
    let str0: string = ifGetText(int4);

    if (stringLength(str0) > 0) {
        if (int6 > 0) {
            int6 = int6 + 5;
        }
        int7 = paraheight(str0, int8, Graphic.p12_full);
        int7 = 12 * int7 + 5;
        ifSetSize(int8, int7, 0, 0, int4);
        ifSetPosition(0, int6, 0, 0, int4);
        ifSetHide(false, int4);
        int6 = int6 + int7;
    } else {
        ifSetHide(true, int4);
    }
    int4 = enumOp(type_int, type_component, Enum.enum_1467, 65);
    str0 = ifGetText(int4);

    if (stringLength(str0) > 0) {
        if (int6 > 0) {
            int6 = int6 + 5;
        }
        int7 = paraheight(str0, int8, Graphic.p12_full);
        int7 = 12 * int7 + 5;
        ifSetSize(int8, int7, 0, 0, int4);
        ifSetPosition(0, int6, 0, 0, int4);
        ifSetHide(false, int4);
        int6 = int6 + int7;
    } else {
        ifSetHide(true, int4);
    }
    int4 = enumOp(type_int, type_component, Enum.enum_1467, 66);
    str0 = ifGetText(int4);

    if (stringLength(str0) > 0) {
        if (int6 > 0) {
            int6 = int6 + 5;
        }
        int7 = paraheight(str0, int8, Graphic.p12_full);
        int7 = 12 * int7 + 5;
        ifSetSize(int8, int7, 0, 0, int4);
        ifSetPosition(0, int6, 0, 0, int4);
        ifSetHide(false, int4);
        int6 = int6 + int7;
    } else {
        ifSetHide(true, int4);
    }
    ifSetScrollSize(int8, int6, intArg0);

    if (int6 > ifGetHeight(intArg0)) {
        ifSetPosition(3, ifGetY(intArg0), 0, 0, intArg0);
        proc_scrollbar_vertical(intArg1, intArg0, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        if (ccFind(intArg1, 1) == 1) {
            scrollbar_ondrag_doscroll(intArg1, intArg0, varc_121, 1);
        }
    } else {
        ifSetScrollPos(0, 0, intArg0);
        varc_121 = 0;
        ifSetPosition(12, ifGetY(intArg0), 0, 0, intArg0);
    }
}
