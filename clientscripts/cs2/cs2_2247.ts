/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2247

function cs2_2247(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: Enum = Enum.enum_3016;

    if (mapMembers() == 1) {
        int6 = Enum.enum_3015;
    }

    if (enumGetoutputcount(int6) % 5 == 0) {
        int3 = enumGetoutputcount(int6) / 5 * 67;
    } else {
        int3 = enumGetoutputcount(int6) / 5 * 67 + 67;
    }
    ccDeleteAll(Component.interface_940.component_940_1);
    ifSetScrollSize(5 * 60, int3, Component.interface_940.component_940_1);

    while (int0 < enumGetoutputcount(int6)) {
        ccCreate(Component.interface_940.component_940_2, 5, int4);
        ccSetOp(1, ocName(structParam(enumOp(type_int, type_struct, int6, int0), Param.param_1070)));
        ccSetOnOpt(hook(cs2_2250, "i", [int4]));
        int5 = int4;
        int4 = int4 + 1;
        ccSetGraphic(Graphic.km_shoptile_1);
        if (statBase(24) < structParam(enumOp(type_int, type_struct, int6, int0), Param.param_1071)) {
            ccSetColour(colour(0xFF0000));
        }
        ccSetSize(52, 55, 0, 0);
        ccSetPosition(int1 * 60, int2 * 67 - 1, 0, 0);
        ccSetHide(true);
        ccCreate(Component.interface_940.component_940_2, 5, int4);
        int4 = int4 + 1;
        ccSetGraphic(Graphic.km_shoptile_0);
        ccSetSize(48, 52, 0, 0);
        ccSetPosition(int1 * 60 + 2, int2 * 67 + 1, 0, 0);
        ccSetOnMouseOver(hook(cs2_2248, "i", [int5]));
        ccHookMouseExit(hook(cs2_2249, "i", [int5]));
        ccCreate(Component.interface_940.component_940_2, 5, int4);
        int4 = int4 + 1;
        ccSetGraphic(Graphic.km_shopitems_4);
        ccSetColour(colour(0xC80000));
        ccSetSize(12, 12, 0, 0);
        ccSetPosition(int1 * 60 + 5, int2 * 67 + 40, 0, 0);
        ccCreate(Component.interface_940.component_940_2, 4, int4);
        int4 = int4 + 1;
        ccSetColour(colour(0xE2E2A2));
        ccSetTextFont(Graphic.p11_full);
        ccSetTextShadow(true);
        ccSetTextAlign(1, 1, 0);
        ccSetText(cs2_940(structParam(enumOp(type_int, type_struct, int6, int0), Param.param_1072)));
        ccSetSize(31, 12, 0, 0);
        ccSetPosition(int1 * 60 + 18, int2 * 67 + 40, 0, 0);
        ccCreate(Component.interface_940.component_940_2, 5, int4);
        int4 = int4 + 1;
        ccSetObject(structParam(enumOp(type_int, type_struct, int6, (int4 - 5) / 5), Param.param_1070), -1);
        ccSetSize(25, 25, 0, 0);
        ccSetPosition(int1 * 60 + 13, int2 * 67 + 9, 0, 0);
        int1 = int1 + 1;
        if (int1 >= 5) {
            int1 = 0;
            int2 = int2 + 1;
        }
        int0 = int0 + 1;
    }

    if (ifGetScrollY(Component.interface_940.component_940_1) == 0) {
        proc_scrollbar_vertical(Component.interface_940.component_940_35, Component.interface_940.component_940_1, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    }
}
