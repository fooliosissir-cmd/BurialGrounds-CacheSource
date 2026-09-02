/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2646

function cs2_2646(intArg0: component): void {
    if (varc_842 == 3) {
        varc_842 = 1;
        ifSetText("Check bank & inventory", intArg0);
        ifSetText("Commodities", Component.interface_860.component_860_18);
        ifSetHide(false, Component.interface_860.component_860_20);
        cs2_2645(Component.interface_860.component_860_20);
        cs2_2642();
        return;
    }
    varc_842 = 3;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    varc_842 = 3;
    let int4: obj = -1;
    ifSetHide(true, Component.interface_860.component_860_20);
    ifSetText("View all commodities", intArg0);
    ifSetText("Commodities in your bank & inventory", Component.interface_860.component_860_18);
    ccDeleteAll(Component.interface_860.component_860_23);
    ifSetText("A list of items already in your inventory or bank that you can trade with Mal for investment credit.", Component.interface_860.component_860_19);
    let int5: number = (ifGetWidth(Component.interface_860.component_860_23) - 36 * 10) / (10 - 1);
    let int6: number = (ifGetHeight(Component.interface_860.component_860_23) - 128) / 3;
    let int7: number = 0;

    while (int1 <= invSize(95)) {
        int4 = invGetobj(95, int1);
        if (int4 != -1 && enumHasoutput(type_obj, Enum.enum_1939, int4) == 1) {
            ccCreate(Component.interface_860.component_860_23, 5, int2);
            ccSetSize(36, 32, 0, 0);
            ccSetPosition((36 + int5) * (int2 % 10), int2 / 10 * (32 + int6), 0, 0);
            ccSetObject(int4, -1);
            ccSetOpBase("<col=ff981f>" + ocName(int4));
            ccSetOp(1, "Examine");
            ccSetGraphicShadow(3355443);
            ccSetOutline(1);
            int2 = int2 + 1;
            int7 = ccGetY();
        }
        int1 = int1 + 1;
    }
    let int8: number = 0;

    while (int8 <= invSize(93)) {
        int4 = invGetobj(93, int8);
        if (int4 != -1 && enumHasoutput(type_obj, Enum.enum_1939, int4) == 1) {
            ccCreate(Component.interface_860.component_860_23, 5, int2);
            ccSetSize(36, 32, 0, 0);
            ccSetPosition((36 + int5) * (int2 % 10), int2 / 10 * (32 + int6), 0, 0);
            ccSetObject(int4, -1);
            ccSetOpBase("<col=ff981f>" + ocName(int4));
            ccSetOp(1, "Examine");
            ccSetGraphicShadow(3355443);
            ccSetOutline(1);
            int2 = int2 + 1;
            int7 = ccGetY();
        }
        int8 = int8 + 1;
    }

    if (int2 == 0) {
        ccCreate(Component.interface_860.component_860_23, 4, int2);
        ccSetSize(200, 32, 0, 0);
        ccSetPosition(0, 0, 1, 4);
        ccSetText("No valid commodities were found in your bank or inventory.");
        ccSetTextFont(Graphic.b12_full);
        ccSetTextAlign(1, 1, 0);
        ccSetTextShadow(false);
        ccSetColour(colour(0xFF981F));
        int2 = 1;
    }
    ifSetScrollSize(ifGetWidth(Component.interface_860.component_860_23), int7 + 32, Component.interface_860.component_860_23);
    ifSetScrollPos(0, 0, Component.interface_860.component_860_23);
    proc_scrollbar_vertical(Component.interface_860.component_860_22, Component.interface_860.component_860_23, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
}
