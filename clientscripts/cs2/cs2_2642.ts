/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2642

function cs2_2642(): void {
    let int0: number = 0;
    let int1: number = 0;

    varc_842 = 1;
    let int2: obj = -1;
    cs2_2645(Component.interface_860.component_860_24);
    ccDeleteAll(Component.interface_860.component_860_23);
    ifSetText("A list of items you can trade with Mal for investment credit." + "<br>" + "Items highlighted with a green rectangle are present in your bank or inventory.", Component.interface_860.component_860_19);
    let int3: number = (ifGetWidth(Component.interface_860.component_860_23) - 36 * 10) / 10;
    let int4: number = (ifGetHeight(Component.interface_860.component_860_23) - 128) / 3;
    let int5: number = 3;
    let int6: number = 3;
    let int7: number = 0;

    while (int1 == 0 && int0 < 900) {
        int2 = enumOp(type_int, type_obj, Enum.enum_1939, int0);
        if (int2 != Obj.shop_dummy && int2 != -1) {
            ccCreate(Component.interface_860.component_860_23, 5, int0);
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(int5 + (36 + int3) * (int0 % 10), int6 + int0 / 10 * (32 + int4), 0, 0);
            ccSetObject(int2, -1);
            ccSetOpBase("<col=ff981f>" + ocName(int2));
            ccSetOp(1, "Examine");
            ccSetGraphicShadow(3355443);
            ccSetOutline(1);
            int7 = ccGetY();
            int0 = int0 + 1;
        } else {
            int1 = 1;
        }
    }
    let int8: number = 0;
    let int9: number = 9999;
    let int10: number = 0;
    let int11: number = 0;

    while (int8 <= invSize(93)) {
        if (invGetobj(93, int8) != -1) {
            int9 = enumOp(type_obj, type_int, Enum.enum_1941, invGetobj(93, int8));
            if (int9 != 9999 && int9 < 900 && ccFind(Component.interface_860.component_860_23, int9) == 1) {
                int10 = ccGetX();
                int11 = ccGetY();
                ccSetOutline(2);
                ccCreate(Component.interface_860.component_860_23, 3, int0);
                ccSetSize(36, 32, 0, 0);
                ccSetPosition(int10 - 1, int11 - 1, 0, 0);
                ccSetColour(colour(0x66FF66));
                ccSetTrans(150);
                int0 = int0 + 1;
            }
        }
        int8 = int8 + 1;
    }
    int8 = 0;
    int9 = 9999;

    while (int8 <= invSize(95)) {
        if (invGetobj(95, int8) != -1) {
            int9 = enumOp(type_obj, type_int, Enum.enum_1941, invGetobj(95, int8));
            if (int9 != 9999 && int9 < 900 && ccFind(Component.interface_860.component_860_23, int9) == 1) {
                int10 = ccGetX();
                int11 = ccGetY();
                ccSetOutline(2);
                ccCreate(Component.interface_860.component_860_23, 3, int0);
                ccSetSize(36, 32, 0, 0);
                ccSetPosition(int10 - 1, int11 - 1, 0, 0);
                ccSetColour(colour(0x66FF66));
                ccSetTrans(150);
                int0 = int0 + 1;
            }
        }
        int8 = int8 + 1;
    }
    ifSetScrollSize(ifGetWidth(Component.interface_860.component_860_23), int7 + 32, Component.interface_860.component_860_23);
    ifSetScrollPos(0, 0, Component.interface_860.component_860_23);
    proc_scrollbar_vertical(Component.interface_860.component_860_22, Component.interface_860.component_860_23, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
}
