/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,login_popup_close]

function proc_login_popup_close(): void {
    let int0: component = Component.interface_596.component_596_6;
    let int1: component = Component.interface_596.component_596_7;
    let int2: component = Component.interface_596.component_596_13;
    let int3: component = Component.interface_596.component_596_12;
    let int4: component = Component.interface_596.component_596_14;
    let int5: component = Component.interface_596.component_596_61;
    let int6: number = 39059471;
    let int7: number = 39059472;
    let int8: number = 39059473;
    let int9: number = 39059518;
    let int10: number = 39059519;
    let int11: number = 39059520;
    let int12: component = Component.interface_596.component_596_18;
    let int13: component = Component.interface_596.component_596_65;

    if (hasBase64url() == 1) {
        int0 = Component.interface_975.component_975_26;
        int1 = Component.interface_975.component_975_1;
        int2 = Component.interface_975.component_975_4;
        int3 = Component.interface_975.component_975_3;
        int4 = Component.interface_975.component_975_5;
        int5 = Component.interface_975.component_975_6;
        int6 = 63897611;
        int7 = 63897612;
        int8 = 63897613;
        int9 = 63897607;
        int10 = 63897608;
        int11 = 63897609;
        int12 = Component.interface_975.component_975_14;
        int13 = Component.interface_975.component_975_10;
    }
    ifSetOnClick(noHook(""), int4);
    ifSetOnClick(noHook(""), int5);
    hookMouseEnter(noHook(""), int5);
    hookMouseExit(noHook(""), int5);
    hookMouseEnter(noHook(""), int4);
    hookMouseExit(noHook(""), int4);
    ifSetPosition(6, 5, 0, 2, int4);
    ifSetPosition(6, 5, 0, 2, int5);
    ifSetText("", int12);
    ifSetText("", int13);
    ifSetHide(true, int4);
    ifSetHide(true, int5);
    ifSetText("", int2);
    varc_1092 = 0;
    ifSetGraphic(-1, int3);
    ifSetOnTimer(noHook(""), int3);
    ifSetHide(true, int0);
    ifSetHide(true, int1);

    if (hasBase64url() == 1) {
        return;
    } else {
        login_open(11);
    }
}
