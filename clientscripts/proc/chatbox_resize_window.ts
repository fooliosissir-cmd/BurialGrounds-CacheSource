/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,chatbox_resize_window]

function chatbox_resize_window(): void {
    let int0: component = Component.interface_746.component_746_49;
    let int1: component = Component.interface_746.component_746_22;
    let int2: component = Component.interface_746.component_746_24;
    let int3: number = ifGetY(int2);
    let int4: number = ifGetHeight(int0);

    if (cs2_1653() == 1) {
        cs2_1652(false);
        ifSetHide(true, int0);
        return;
    } else if (varc_chat_view != -1) {
        ifSetHide(false, int0);
    }

    if (varc_1037 < 142) {
        varc_1037 = 142;
    } else if (varc_1037 > ifGetHeight(Component.interface_746.component_746_52) - 117) {
        chatbox_resize(0, true);
        return;
    }
    varc_7 = varc_7 - (varc_1037 + 2 - ifGetHeight(int1));
    ifSetSize(519, varc_1037 + 2, 0, 0, int1);
    ifSetPosition(0, 26, 0, 2, int1);
    let int5: number = ifGetY(int1) - 2 - int4 - int3;
    int5 = int5 + 4;
    ifSetPosition(0, int5, 0, 0, int0);
    ifSetPosition(0, ifGetY(int1) - 88, 0, 0, Component.interface_746.component_746_25);
    ifSetPosition(0, 26 + ifGetHeight(int1), 0, 2, Component.interface_746.buff_bar);
    rebuildchatbox();
}
