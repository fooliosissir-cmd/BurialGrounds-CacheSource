/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5563

function cs2_5563(intArg0: number, intArg1: component): void {
    let int2: number = intArg0 + 20;
    let int3: number = intArg0 + 40;
    let int4: number = intArg0 + 60;
    let int5: number = intArg0 + 80;
    let int6: number = intArg0 + 100;
    let int7: number = intArg0 + 120;
    let int8: number = -1;

    if (clientClock() >= int7) {
        ifSetHide(true, intArg1);
        ifSetTrans(255, intArg1);
        ifSetOnTimer(noHook(""), intArg1);
    }

    if (clientClock() < int2) {
        int8 = ifGetTrans(intArg1) - 15;
        if (int8 < 0) {
            int8 = 0;
        }
        ifSetTrans(int8, intArg1);
        ifSetGraphic(Graphic.aif_money_xp_button_1_1, Component.interface_746.component_746_209);
        ifSetGraphic(Graphic.money_pouch_button_1, Component.interface_548.component_548_32);
    } else if (clientClock() < int3) {
        int8 = ifGetTrans(intArg1) + 15;
        if (int8 > 255) {
            int8 = 255;
        }
        ifSetTrans(int8, intArg1);
        ifSetGraphic(Graphic.aif_money_xp_button_1_0, Component.interface_746.component_746_209);
        ifSetGraphic(Graphic.money_pouch_button_0, Component.interface_548.component_548_32);
    } else if (clientClock() < int4) {
        int8 = ifGetTrans(intArg1) - 15;
        if (int8 < 0) {
            int8 = 0;
        }
        ifSetTrans(int8, intArg1);
        ifSetGraphic(Graphic.aif_money_xp_button_1_1, Component.interface_746.component_746_209);
        ifSetGraphic(Graphic.money_pouch_button_1, Component.interface_548.component_548_32);
    } else if (clientClock() < int5) {
        int8 = ifGetTrans(intArg1) + 15;
        if (int8 > 255) {
            int8 = 255;
        }
        ifSetTrans(int8, intArg1);
        ifSetGraphic(Graphic.aif_money_xp_button_1_0, Component.interface_746.component_746_209);
        ifSetGraphic(Graphic.money_pouch_button_0, Component.interface_548.component_548_32);
    } else if (clientClock() < int6) {
        int8 = ifGetTrans(intArg1) - 15;
        if (int8 < 0) {
            int8 = 0;
        }
        ifSetTrans(int8, intArg1);
        ifSetGraphic(Graphic.aif_money_xp_button_1_1, Component.interface_746.component_746_209);
        ifSetGraphic(Graphic.money_pouch_button_1, Component.interface_548.component_548_32);
    } else {
        int8 = ifGetTrans(intArg1) + 15;
        if (int8 > 255) {
            int8 = 255;
        }
        ifSetTrans(int8, intArg1);
        ifSetGraphic(Graphic.aif_money_xp_button_1_0, Component.interface_746.component_746_209);
        ifSetGraphic(Graphic.money_pouch_button_0, Component.interface_548.component_548_32);
    }
}
