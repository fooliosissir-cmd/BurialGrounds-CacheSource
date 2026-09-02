/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,chatbox_resize]

function chatbox_resize(intArg0: number, intArg1: boolean): void {
    let int2: component = Component.interface_746.component_746_52;
    let int3: component = Component.interface_746.component_746_24;
    let int4: component = Component.interface_746.component_746_49;
    let int5: component = Component.interface_746.component_746_22;
    let int6: number = ifGetHeight(int2);
    let int7: number = ifGetY(int3);
    let int8: number = ifGetHeight(int4);

    if (cs2_1653() == 1) {
        intArg0 = int6 - 172;
        ifSetHide(true, int4);
    } else if (varc_chat_view != -1) {
        ifSetHide(false, int4);
    }
    let int9: number = int6 - int7 - intArg0 - int8 - 26;

    if (intArg1 == true) {
        int9 = int9 - int9 % 14 + 1;
    }

    if (int9 < 142) {
        int9 = 142;
    }
    varc_7 = varc_7 - (int9 + 2 - ifGetHeight(int5));
    ifSetSize(519, int9 + 2, 0, 0, int5);
    ifSetPosition(0, 26, 0, 2, int5);

    if (intArg1 == true) {
        varc_1037 = int9;
    }
    let int10: number = ifGetY(int5) - 2 - int8 - int7;
    int10 = int10 + 4;
    ifSetPosition(0, int10, 0, 0, int4);
    ifSetPosition(0, ifGetY(int5) - 88, 0, 0, Component.interface_746.component_746_25);
    rebuildchatbox();
}
