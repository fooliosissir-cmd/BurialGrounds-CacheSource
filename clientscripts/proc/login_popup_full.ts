/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,login_popup_full]

function login_popup_full(intArg0: number, intArg1: number, strArg0: string, intArg2: number, intArg3: graphic, intArg4: number, intArg5: number, strArg1: string, intArg6: number, strArg2: string, intArg7: number): void {
    let int8: component = Component.interface_596.component_596_6;
    let int9: component = Component.interface_596.component_596_7;
    let int10: component = Component.interface_596.component_596_13;
    let int11: component = Component.interface_596.component_596_12;
    let int12: component = Component.interface_596.component_596_14;
    let int13: component = Component.interface_596.component_596_61;
    let int14: component = Component.interface_596.component_596_15;
    let int15: component = Component.interface_596.component_596_16;
    let int16: component = Component.interface_596.component_596_17;
    let int17: component = Component.interface_596.component_596_62;
    let int18: component = Component.interface_596.component_596_63;
    let int19: component = Component.interface_596.component_596_64;

    if (hasSignonKey() == 1) {
        int8 = Component.interface_975.component_975_26;
        int9 = Component.interface_975.component_975_1;
        int10 = Component.interface_975.component_975_4;
        int11 = Component.interface_975.component_975_3;
        int12 = Component.interface_975.component_975_5;
        int13 = Component.interface_975.component_975_6;
        int14 = Component.interface_975.component_975_11;
        int15 = Component.interface_975.component_975_12;
        int16 = Component.interface_975.component_975_13;
        int17 = Component.interface_975.component_975_7;
        int18 = Component.interface_975.component_975_8;
        int19 = Component.interface_975.component_975_9;
    }

    if (ifGetHide(int8) == 0) {
        return;
    }

    if (varc_loginscreen_focus != 5) {
        varc_1089 = varc_loginscreen_focus;
    }
    varc_loginscreen_focus = 5;
    let int20: number = 250;

    if (intArg4 == 1) {
        int20 = max(250, stringWidth(strArg1, Graphic.verdana_11pt_regular) + 36);
        if (int20 % 2 > 0) {
            int20 = int20 + 1;
        }
    }
    ifSetSize(int20, 154, 0, 0, int9);
    let int21: number = paraheight(strArg0, ifGetWidth(int10), Graphic.verdana_11pt_regular) * 16 + 5;
    ifSetSize(20, int21, 1, 0, int10);
    ifSetText(strArg0, int10);

    if (intArg2 == 1) {
        varc_1092 = clientClock() + 5;
        ifSetGraphic(Graphic.loading_wheel_1_0, int11);
        ifSetSize(111, 111, 0, 0, int11);
        ifSetPosition(0, 7, 1, 0, int11);
        ifSetPosition(0, 112, 1, 0, int10);
        ifSetOnTimer(hook(login_popup_throbber, "", []), int11);
    } else {
        varc_1092 = 0;
        ifSetOnTimer(noHook(""), int11);
        ifSetGraphic(intArg3, int11);
        ifSetSize(76, 63, 0, 0, int11);
        ifSetPosition(0, 18, 1, 0, int11);
        ifSetPosition(0, 123, 1, 0, int10);
        int21 = int21 - 35;
    }
    let int22: number = 0;
    int21 = ifGetY(int10) + int21;

    if (intArg4 == 0 && intArg6 == 0) {
        int22 = 12;
        int21 = int21 + int22;
        ifSetHide(true, int12);
        ifSetHide(true, int13);
    } else if (intArg4 == 1 && intArg6 == 0) {
        int22 = 41;
        int21 = int21 + int22;
        ifSetPosition(0, 8, 1, 2, int12);
        ifSetHide(false, int12);
        ifSetHide(true, int13);
        login_popup_small_button(strArg1, int12, int14, int15, int16, intArg5);
    } else if (intArg4 == 0 && intArg6 == 1) {
        int22 = 41;
        int21 = int21 + int22;
        ifSetPosition(0, 8, 1, 2, int13);
        ifSetHide(false, int13);
        ifSetHide(true, int12);
        login_popup_big_button(strArg2, int13, int17, int18, int19);
    } else {
        int22 = 70;
        int21 = int21 + int22;
        if (intArg7 == 0) {
            ifSetPosition(0, 40, 1, 2, int12);
            ifSetPosition(0, 10, 1, 2, int13);
        } else {
            ifSetPosition(0, 10, 1, 2, int12);
            ifSetPosition(0, 40, 1, 2, int13);
        }
        ifSetHide(false, int13);
        ifSetHide(false, int12);
        login_popup_small_button(strArg1, int12, int14, int15, int16, intArg5);
        login_popup_big_button(strArg2, int13, int17, int18, int19);
    }
    ifSetSize(ifGetWidth(int9), int21, 0, 0, int9);
    cs2_2952(int12, int13, intArg0);
    ifSetPosition(0, int22, 1, 2, int10);
    ifSetHide(false, int8);
    ifSetHide(false, int9);
    ifSetHide(true, Component.interface_596.component_596_5);
}
