/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,object_choice_build]

function object_choice_build(): void {
    let int0: number = 0;
    let int1: number = 10;

    if (varc_1703 != -1) {
        int0 = parawidth(ocName(varc_1703), 2147483647, Graphic.p11_full);
    }

    if (varc_1704 != -1) {
        int0 = max(parawidth(ocName(varc_1704), 2147483647, Graphic.p11_full), int0);
    }

    if (varc_1705 != -1) {
        int0 = max(parawidth(ocName(varc_1705), 2147483647, Graphic.p11_full), int0);
    }

    if (varc_1706 != -1) {
        int0 = max(parawidth(ocName(varc_1706), 2147483647, Graphic.p11_full), int0);
    }

    if (varc_1707 != -1) {
        int0 = max(parawidth(ocName(varc_1707), 2147483647, Graphic.p11_full), int0);
    }

    if (varc_1708 != -1) {
        int0 = max(parawidth(ocName(varc_1708), 2147483647, Graphic.p11_full), int0);
    }

    if (varc_1709 != -1) {
        int0 = max(parawidth(ocName(varc_1709), 2147483647, Graphic.p11_full), int0);
    }

    if (varc_1710 != -1) {
        int0 = max(parawidth(ocName(varc_1710), 2147483647, Graphic.p11_full), int0);
    }

    if (varc_1711 != -1) {
        int0 = max(parawidth(ocName(varc_1711), 2147483647, Graphic.p11_full), int0);
    }

    if (varc_1712 != -1) {
        int0 = max(parawidth(ocName(varc_1712), 2147483647, Graphic.p11_full), int0);
    }

    if (varc_1713 != -1) {
        int0 = max(parawidth(ocName(varc_1713), 2147483647, Graphic.p11_full), int0);
    }

    if (varc_1714 != -1) {
        int0 = max(parawidth(ocName(varc_1714), 2147483647, Graphic.p11_full), int0);
    }

    if (varc_1715 != -1) {
        int0 = max(parawidth(ocName(varc_1715), 2147483647, Graphic.p11_full), int0);
    }

    if (varc_1716 != -1) {
        int0 = max(parawidth(ocName(varc_1716), 2147483647, Graphic.p11_full), int0);
    }

    if (varc_1717 != -1) {
        int0 = max(parawidth(ocName(varc_1717), 2147483647, Graphic.p11_full), int0);
    }
    int0 = int0 + 4;
    int0 = max(int0 + 4 * 2, 56);
    let int2: number = cs2_5528(int1, int0, int1, varc_1703, Component.interface_1179.component_1179_11);
    int2 = cs2_5528(int2, int0, int1, varc_1704, Component.interface_1179.component_1179_12);
    int2 = cs2_5528(int2, int0, int1, varc_1705, Component.interface_1179.component_1179_13);
    int2 = cs2_5528(int2, int0, int1, varc_1706, Component.interface_1179.component_1179_14);
    int2 = cs2_5528(int2, int0, int1, varc_1707, Component.interface_1179.component_1179_15);
    int2 = cs2_5528(int2, int0, int1, varc_1708, Component.interface_1179.component_1179_16);
    int2 = cs2_5528(int2, int0, int1, varc_1709, Component.interface_1179.component_1179_17);
    int2 = cs2_5528(int2, int0, int1, varc_1710, Component.interface_1179.component_1179_18);
    int2 = cs2_5528(int2, int0, int1, varc_1711, Component.interface_1179.component_1179_19);
    int2 = cs2_5528(int2, int0, int1, varc_1712, Component.interface_1179.component_1179_20);
    int2 = cs2_5528(int2, int0, int1, varc_1713, Component.interface_1179.component_1179_21);
    int2 = cs2_5528(int2, int0, int1, varc_1714, Component.interface_1179.component_1179_22);
    int2 = cs2_5528(int2, int0, int1, varc_1715, Component.interface_1179.component_1179_23);
    int2 = cs2_5528(int2, int0, int1, varc_1716, Component.interface_1179.component_1179_24);
    int2 = cs2_5528(int2, int0, int1, varc_1717, Component.interface_1179.component_1179_25);

    if (ifGetHide(Component.interface_1179.component_1179_11) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_11);
    }

    if (ifGetHide(Component.interface_1179.component_1179_12) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_12);
    }

    if (ifGetHide(Component.interface_1179.component_1179_13) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_13);
    }

    if (ifGetHide(Component.interface_1179.component_1179_14) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_14);
    }

    if (ifGetHide(Component.interface_1179.component_1179_15) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_15);
    }

    if (ifGetHide(Component.interface_1179.component_1179_16) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_16);
    }

    if (ifGetHide(Component.interface_1179.component_1179_17) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_17);
    }

    if (ifGetHide(Component.interface_1179.component_1179_18) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_18);
    }

    if (ifGetHide(Component.interface_1179.component_1179_19) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_19);
    }

    if (ifGetHide(Component.interface_1179.component_1179_20) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_20);
    }

    if (ifGetHide(Component.interface_1179.component_1179_21) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_21);
    }

    if (ifGetHide(Component.interface_1179.component_1179_22) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_22);
    }

    if (ifGetHide(Component.interface_1179.component_1179_23) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_23);
    }

    if (ifGetHide(Component.interface_1179.component_1179_24) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_24);
    }

    if (ifGetHide(Component.interface_1179.component_1179_25) == 0) {
        ifSetPauseText("Select", Component.interface_1179.component_1179_25);
    }
    int0 = ifGetWidth(Component.interface_1179.component_1179_4) - 50;
    let int3: graphic = Graphic.sm_select_body_button_0;
    let int4: graphic = Graphic.sm_select_body_button_2;
    let int5: graphic = Graphic.sm_select_body_button_1;
    let int6: graphic = Graphic.sm_select_body_button_3;

    if (int2 > int0) {
        ifSetSize(int0, 0, 0, 1, Component.interface_1179.component_1179_10);
        ifSetScrollSize(int2, 0, Component.interface_1179.component_1179_10);
        ifSetScrollPos(varc_93, 0, Component.interface_1179.component_1179_10);
        ifSetOnMouseRepeat(hook(object_choice_scroller, "Idi", [event_com, int5, -4]), Component.interface_1179.component_1179_8);
        ifSetOnMouseRepeat(hook(object_choice_scroller, "Idi", [event_com, int6, 4]), Component.interface_1179.component_1179_9);
        ifSetOnHold(hook(object_choice_scroller, "Idi", [event_com, int5, -6]), 77266952);
        ifSetOnHold(hook(object_choice_scroller, "Idi", [event_com, int6, 6]), 77266953);
        ifSetOnMouseLeave(hook(graphic_swapper, "Id", [event_com, int3]), Component.interface_1179.component_1179_8);
        ifSetOnMouseLeave(hook(graphic_swapper, "Id", [event_com, int4]), Component.interface_1179.component_1179_9);
        cs2_5533();
    } else {
        ifSetSize(int2, 0, 0, 1, Component.interface_1179.component_1179_10);
        ifSetScrollSize(0, 0, Component.interface_1179.component_1179_10);
        ifSetScrollPos(0, 0, Component.interface_1179.component_1179_10);
        ifClearscripthooks(Component.interface_1179.component_1179_8);
        ifClearscripthooks(Component.interface_1179.component_1179_9);
        ifSetTrans(150, Component.interface_1179.component_1179_8);
        ifSetTrans(150, Component.interface_1179.component_1179_9);
    }
    ifSetGraphic(int3, Component.interface_1179.component_1179_8);
    ifSetGraphic(int4, Component.interface_1179.component_1179_9);
    ifSetOnVarcTransmit(hook(object_choice_build, "Y", [], [1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717]), Component.interface_1179.component_1179_2);
}
