/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rand_load_shop]

function rand_load_shop(intArg0: component): void {
    let int1: number = ifGetWidth(intArg0);
    let int2: number = ifGetHeight(intArg0);
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: Enum = Enum.enum_2987;
    let int7: Enum = Enum.enum_2988;

    if (mapMembers() == 1) {
        if (varc_1320 == 2) {
            int6 = Enum.enum_2989;
            int7 = Enum.enum_2990;
        } else if (varc_1320 == 3) {
            int6 = Enum.enum_2991;
            int7 = Enum.enum_2992;
        } else if (varc_1320 == 4) {
            int6 = Enum.enum_2993;
            int7 = Enum.enum_2994;
        } else {
            int6 = Enum.enum_2987;
            int7 = Enum.enum_2988;
        }
    } else if (varc_1320 == 2) {
        int6 = Enum.enum_2997;
        int7 = Enum.enum_2998;
    } else if (varc_1320 == 3) {
        int6 = Enum.enum_2999;
        int7 = Enum.enum_3000;
    } else if (varc_1320 == 4) {
        int6 = Enum.enum_3001;
        int7 = Enum.enum_3002;
    } else {
        int6 = Enum.enum_2995;
        int7 = Enum.enum_2996;
    }
    ccDeleteAll(intArg0);
    ccDeleteAll(Component.interface_956.component_956_25);
    ccCreate(intArg0, 4, int3);
    int3 = int3 + 1;
    ccSetSize(31, 12, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(0, 1, 0);
    ccSetText("Resources:");
    ccSetColour(colour(0xC69B01));
    ccSetTextShadow(true);
    ccCreate(intArg0, 5, int3);
    int3 = int3 + 1;
    ccSetSize(160, 12, 0, 0);
    ccSetPosition(0, 7, 0, 0);
    ccSetGraphic(Graphic.graphic_1074);
    int5 = int5 + 20;
    let int8: number = int3;

    while (int3 - int8 < enumGetoutputcount(int6) * 5) {
        ccCreate(intArg0, 5, int3);
        ccSetSize(48, 52, 0, 0);
        ccSetPosition(int4, int5, 0, 0);
        ccSetGraphic(Graphic.km_shoptile_0);
        ccSetOpBase("<col=ff981f>" + ocName(enumOp(type_int, type_obj, int6, (int3 - int8) / 5)) + "</col>");
        ccSetOp(1, "Info");
        ccSetOp(2, "Buy 1");
        ccSetOp(3, "Buy 5");
        ccSetOp(4, "Buy 10");
        ccSetOp(5, "Buy 50");
        ccSetOp(6, "Buy 250");
        ccSetOp(10, "Examine");
        ccSetOnMouseOver(hook(cs2_2261, "Ii1", [event_com, int3 + 1, false]));
        ccSetOnMouseLeave(hook(cs2_2261, "Ii1", [event_com, int3 + 1, true]));
        ccCreate(intArg0, 5, int3 + 1);
        ccSetSize(48, 52, 0, 0);
        ccSetPosition(int4, int5, 0, 0);
        ccSetGraphic(Graphic.km_shoptile_1);
        ccSetHide(true);
        ccCreate(intArg0, 5, int3 + 2);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition(int4 + 6, int5 + 4, 0, 0);
        ccSetObjectNonum(enumOp(type_int, type_obj, int6, (int3 - int8) / 5), 1);
        ccSetGraphicShadow(3153952);
        ccSetOutline(1);
        ccCreate(intArg0, 5, int3 + 3);
        ccSetSize(12, 12, 0, 0);
        ccSetPosition(int4 + 2, int5 + 38, 0, 0);
        ccSetGraphic(Graphic.km_shopitems_1);
        ccCreate(intArg0, 4, int3 + 4);
        ccSetSize(31, 12, 0, 0);
        ccSetPosition(int4 + 13, int5 + 39, 0, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetTextAlign(2, 1, 0);
        ccSetText(cs2_940(rand_buyprice(enumOp(type_int, type_obj, int6, (int3 - int8) / 5))));
        ccSetColour(colour(0xE2E2A2));
        ccSetTextShadow(true);
        int4 = int4 + 50;
        if (int4 + 48 > int1) {
            int4 = 0;
            int5 = int5 + 54;
        }
        int3 = int3 + 5;
    }

    if (int4 != 0) {
        int4 = 0;
        int5 = int5 + 52;
    }
    ccCreate(intArg0, 4, int3);
    int3 = int3 + 1;
    ccSetSize(31, 12, 0, 0);
    ccSetPosition(0, int5 + 10, 0, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(0, 1, 0);
    ccSetText("Tools:");
    ccSetColour(colour(0xC69B01));
    ccSetTextShadow(true);
    ccCreate(intArg0, 5, int3);
    int3 = int3 + 1;
    ccSetSize(160, 12, 0, 0);
    ccSetPosition(0, int5 + 17, 0, 0);
    ccSetGraphic(Graphic.graphic_1074);
    int5 = int5 + 30;
    int8 = int3;

    while (int3 - int8 < enumGetoutputcount(int7) * 5) {
        ccCreate(intArg0, 5, int3);
        ccSetSize(48, 52, 0, 0);
        ccSetPosition(int4, int5, 0, 0);
        ccSetGraphic(Graphic.km_shoptile_0);
        ccSetOpBase("<col=ff981f>" + ocName(enumOp(type_int, type_obj, int7, (int3 - int8) / 5)) + "</col>");
        ccSetOp(1, "Info");
        ccSetOp(2, "Buy 1");
        ccSetOp(3, "Buy 5");
        ccSetOp(4, "Buy 10");
        ccSetOp(5, "Buy 50");
        ccSetOp(6, "Buy 250");
        ccSetOp(10, "Examine");
        ccSetOnMouseOver(hook(cs2_2261, "Ii1", [event_com, int3 + 1, false]));
        ccSetOnMouseLeave(hook(cs2_2261, "Ii1", [event_com, int3 + 1, true]));
        ccCreate(intArg0, 5, int3 + 1);
        ccSetSize(48, 52, 0, 0);
        ccSetPosition(int4, int5, 0, 0);
        ccSetGraphic(Graphic.km_shoptile_1);
        ccSetHide(true);
        ccCreate(intArg0, 5, int3 + 2);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition(int4 + 6, int5 + 4, 0, 0);
        ccSetObjectNonum(enumOp(type_int, type_obj, int7, (int3 - int8) / 5), 1);
        ccSetGraphicShadow(3153952);
        ccSetOutline(1);
        ccCreate(intArg0, 5, int3 + 3);
        ccSetSize(12, 12, 0, 0);
        ccSetPosition(int4 + 2, int5 + 38, 0, 0);
        ccSetGraphic(Graphic.km_shopitems_1);
        ccCreate(intArg0, 4, int3 + 4);
        ccSetSize(31, 12, 0, 0);
        ccSetPosition(int4 + 13, int5 + 39, 0, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetTextAlign(2, 1, 0);
        ccSetText(cs2_940(rand_buyprice(enumOp(type_int, type_obj, int7, (int3 - int8) / 5))));
        ccSetColour(colour(0xE2E2A2));
        ccSetTextShadow(true);
        int4 = int4 + 50;
        if (int4 + 48 > int1) {
            int4 = 0;
            int5 = int5 + 54;
        }
        int3 = int3 + 5;
    }
    ifSetScrollSize(0, int5 + 52, intArg0);
    proc_scrollbar_vertical(Component.interface_956.component_956_25, intArg0, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
}
