/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,notes_drag]

function notes_drag(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: number = 0;
    let int4: number = 0;

    if (ccFind(intArg0, intArg1) == 1) {
        ifSetHide(true, Component.interface_34.component_34_14);
        ifSetHide(false, Component.interface_34.component_34_10);
        int4 = ccGetHeight();
        ifSetPosition(ccGetX(), intArg2, 0, 0, Component.interface_34.component_34_10);
        ifSetSize(ccGetWidth(), int4, 0, 0, Component.interface_34.component_34_10);
        int3 = intArg2 + int4 / 2;
    }
    let int5: number = ifGetY(Component.interface_34.component_34_11);
    let int6: number = int5 + ifGetHeight(Component.interface_34.component_34_11);

    if (int3 >= int5 && int3 <= int6) {
        ifSetGraphic(Graphic.notes_add_delete_icons_4, Component.interface_34.component_34_8);
    } else {
        ifSetGraphic(Graphic.notes_add_delete_icons_3, Component.interface_34.component_34_8);
    }
    let int7: number = 0;
    let int8: number = ifGetY(Component.interface_34.component_34_9);
    let int9: number = int8 + int4;
    let int10: number = int8 + ifGetHeight(Component.interface_34.component_34_9);
    let int11: number = int10 - int4;

    if (int3 >= int8 && int3 <= int9) {
        int7 = -4;
    } else if (int3 >= int11 && int3 <= int10) {
        int7 = 4;
    } else {
        varc_821 = 0;
        return;
    }
    varc_821 = varc_821 + 1;

    if (varc_821 > 5) {
        scrollbar_ondrag_doscroll(Component.interface_34.component_34_15, Component.interface_34.component_34_9, ifGetScrollY(Component.interface_34.component_34_9) + int7, 1);
    }
}
