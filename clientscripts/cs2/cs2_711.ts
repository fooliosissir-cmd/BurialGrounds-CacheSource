/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_711

function cs2_711(): void {
    ifSetOnOp(hook(cs2_2023, "ii", [event_opindex, 1]), Component.interface_916.component_916_24);
    ifSetOnOp(hook(cs2_2023, "ii", [event_opindex, -1]), Component.interface_916.component_916_25);
    cs2_2020(1, "1", 41, Component.interface_916.component_916_10);
    cs2_2020(5, "5", 41, Component.interface_916.component_916_11);
    cs2_2020(10, "10", 41, Component.interface_916.component_916_12);
    let int0: number = ifGetWidth(Component.interface_916.component_916_14);
    let int1: number = ifGetWidth(Component.interface_905.component_905_3);
    let int2: number = int1 - int0 - (41 * 3 + 5 * 2);
    let int3: number = 0;
    let int4: number = 0;
    let str0: string = "All";
    let str1: string = "Custom";

    if (cs2_1103() == 1) {
        int3 = max(stringWidth(str0, Graphic.p11_full), stringWidth(str1, Graphic.p11_full)) + 20;
        cs2_2020(varbit_8094, str0, int3, Component.interface_916.component_916_13);
        cs2_2020(-1, str1, int3, Component.interface_905.component_905_6);
        int2 = int2 - (int3 * 2 + 5);
        int4 = scale(2, 5, int2);
        ifSetPosition(int4, 0, 0, 1, Component.interface_916.component_916_13);
        int4 = int4 + int3 + 5;
        ifSetPosition(int4, 0, 0, 1, Component.interface_905.component_905_6);
        int4 = int4 + int3;
        int4 = int4 + int2 / 5;
        ifSetPosition(int4, 0, 0, 1, Component.interface_916.component_916_10);
        int4 = int4 + 41 + 5;
        ifSetPosition(int4, 0, 0, 1, Component.interface_916.component_916_11);
        int4 = int4 + 41 + 5;
        ifSetPosition(int4, 0, 0, 1, Component.interface_916.component_916_12);
    } else {
        ifSetHide(true, Component.interface_916.component_916_13);
        ifSetHide(true, Component.interface_905.component_905_6);
        int4 = int2 / 2;
        ifSetPosition(int4, 0, 0, 1, Component.interface_916.component_916_10);
        int4 = int4 + 41 + 5;
        ifSetPosition(int4, 0, 0, 1, Component.interface_916.component_916_11);
        int4 = int4 + 41 + 5;
        ifSetPosition(int4, 0, 0, 1, Component.interface_916.component_916_12);
    }
    ifSetPosition(int0 - 5, 0, 2, 1, Component.interface_916.component_916_7);
    ifSetPosition(int0, 0, 2, 1, Component.interface_905.component_905_5);
    let int5: number = int1 - int0;

    if (varc_92 == true) {
        ifSetSize(int5 + 5, 0, 0, 1, Component.interface_916.component_916_7);
        ifSetSize(int5, 0, 0, 1, Component.interface_905.component_905_5);
        cs2_2192(0, int5);
    } else {
        ifSetSize(5, 0, 0, 1, Component.interface_916.component_916_7);
        ifSetSize(0, 0, 0, 1, Component.interface_905.component_905_5);
        cs2_2192(1, int5);
    }
    ifSetSize(ifGetX(Component.interface_916.component_916_6) * 2 + int0, 0, 1, 1, Component.interface_916.component_916_6);
    str1 = "Show/Hide additional number buttons";
    let int6: graphic = Graphic.graphic_3883;
    ifSetOnMouseRepeat(hook(cs2_1160, "IiIsii", [event_com, -1, Component.interface_905.component_905_29, str1, 25, 519]), Component.interface_916.component_916_26);
    ifSetOnMouseLeave(hook(cs2_299, "IId", [Component.interface_905.component_905_29, Component.interface_916.component_916_27, int6]), Component.interface_916.component_916_26);
    int2 = (70 - 56) / 2;
    int3 = 0;

    if (varc_755 != -1) {
        int3 = parawidth(varcstr_132, 2147483647, Graphic.p11_full);
    }

    if (varc_756 != -1) {
        int3 = max(parawidth(varcstr_133, 2147483647, Graphic.p11_full), int3);
    }

    if (varc_757 != -1) {
        int3 = max(parawidth(varcstr_134, 2147483647, Graphic.p11_full), int3);
    }

    if (varc_758 != -1) {
        int3 = max(parawidth(varcstr_135, 2147483647, Graphic.p11_full), int3);
    }

    if (varc_759 != -1) {
        int3 = max(parawidth(varcstr_136, 2147483647, Graphic.p11_full), int3);
    }

    if (varc_760 != -1) {
        int3 = max(parawidth(varcstr_137, 2147483647, Graphic.p11_full), int3);
    }

    if (varc_1139 != -1) {
        int3 = max(parawidth(varcstr_280, 2147483647, Graphic.p11_full), int3);
    }

    if (varc_1140 != -1) {
        int3 = max(parawidth(varcstr_281, 2147483647, Graphic.p11_full), int3);
    }

    if (varc_1141 != -1) {
        int3 = max(parawidth(varcstr_282, 2147483647, Graphic.p11_full), int3);
    }

    if (varc_1142 != -1) {
        int3 = max(parawidth(varcstr_283, 2147483647, Graphic.p11_full), int3);
    }

    if (varc_120 != -1) {
        int3 = max(parawidth(varcstr_275, 2147483647, Graphic.p11_full), int3);
    }

    if (varc_185 != -1) {
        int3 = max(parawidth(varcstr_316, 2147483647, Graphic.p11_full), int3);
    }

    if (varc_87 != -1) {
        int3 = max(parawidth(varcstr_317, 2147483647, Graphic.p11_full), int3);
    }

    if (varc_90 != -1) {
        int3 = max(parawidth(varcstr_318, 2147483647, Graphic.p11_full), int3);
    }
    int3 = int3 + 4;
    int3 = max(int3 + 4 * 2, 56);
    int4 = cs2_1883(int2, int3, int2, varc_755, varcstr_132, Component.interface_905.component_905_14);
    int4 = cs2_1883(int4, int3, int2, varc_756, varcstr_133, Component.interface_905.component_905_15);
    int4 = cs2_1883(int4, int3, int2, varc_757, varcstr_134, Component.interface_905.component_905_16);
    int4 = cs2_1883(int4, int3, int2, varc_758, varcstr_135, Component.interface_905.component_905_17);
    int4 = cs2_1883(int4, int3, int2, varc_759, varcstr_136, Component.interface_905.component_905_18);
    int4 = cs2_1883(int4, int3, int2, varc_760, varcstr_137, Component.interface_905.component_905_19);
    int4 = cs2_1883(int4, int3, int2, varc_1139, varcstr_280, Component.interface_905.component_905_20);
    int4 = cs2_1883(int4, int3, int2, varc_1140, varcstr_281, Component.interface_905.component_905_26);
    int4 = cs2_1883(int4, int3, int2, varc_1141, varcstr_282, Component.interface_905.component_905_21);
    int4 = cs2_1883(int4, int3, int2, varc_1142, varcstr_283, Component.interface_905.component_905_22);
    int4 = cs2_1883(int4, int3, int2, varc_120, varcstr_275, Component.interface_905.component_905_23);
    int4 = cs2_1883(int4, int3, int2, varc_185, varcstr_316, Component.interface_905.component_905_24);
    int4 = cs2_1883(int4, int3, int2, varc_87, varcstr_317, Component.interface_905.component_905_25);
    int4 = cs2_1883(int4, int3, int2, varc_90, varcstr_318, Component.interface_905.component_905_27);
    cs2_2047();
    int3 = ifGetWidth(Component.interface_905.component_905_7) - 50;
    let int7: graphic = Graphic.sm_select_body_button_0;
    int6 = Graphic.sm_select_body_button_2;
    let int8: graphic = Graphic.sm_select_body_button_1;
    let int9: graphic = Graphic.sm_select_body_button_3;

    if (int4 > int3) {
        ifSetSize(int3, 0, 0, 1, Component.interface_905.component_905_13);
        ifSetScrollSize(int4, 0, Component.interface_905.component_905_13);
        ifSetScrollPos(varc_93, 0, Component.interface_905.component_905_13);
        ifSetOnMouseRepeat(hook(cs2_2369, "Idi", [event_com, int8, -4]), Component.interface_905.component_905_11);
        ifSetOnMouseRepeat(hook(cs2_2369, "Idi", [event_com, int9, 4]), Component.interface_905.component_905_12);
        ifSetOnHold(hook(cs2_2369, "Idi", [event_com, int8, -6]), 59310091);
        ifSetOnHold(hook(cs2_2369, "Idi", [event_com, int9, 6]), 59310092);
        ifSetOnMouseLeave(hook(graphic_swapper, "Id", [event_com, int7]), Component.interface_905.component_905_11);
        ifSetOnMouseLeave(hook(graphic_swapper, "Id", [event_com, int6]), Component.interface_905.component_905_12);
        cs2_2370();
    } else {
        ifSetSize(int4, 0, 0, 1, Component.interface_905.component_905_13);
        ifSetScrollSize(0, 0, Component.interface_905.component_905_13);
        ifSetScrollPos(0, 0, Component.interface_905.component_905_13);
        ifClearscripthooks(Component.interface_905.component_905_11);
        ifClearscripthooks(Component.interface_905.component_905_12);
        ifSetTrans(150, Component.interface_905.component_905_11);
        ifSetTrans(150, Component.interface_905.component_905_12);
    }
    ifSetGraphic(int7, Component.interface_905.component_905_11);
    ifSetGraphic(int6, Component.interface_905.component_905_12);
    ifSetOnVarcTransmit(hook(cs2_711, "Y", [], [754]), Component.interface_905.component_905_2);
    ifSetOnVarTransmit(hook(cs2_2025, "Y", [], [1363]), Component.interface_905.component_905_2);
}
