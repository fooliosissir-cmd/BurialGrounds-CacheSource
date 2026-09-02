/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_bilrach_mind_clear_button]

function fremsaga_bilrach_mind_clear_button(intArg0: number, intArg1: number): void {
    switch (intArg0) {
        case 1:
            ifSetHide(true, Component.interface_1270.component_1270_122);
            break;
        case 2:
            ifSetHide(true, Component.interface_1270.component_1270_123);
            break;
        case 3:
            ifSetHide(true, Component.interface_1270.component_1270_124);
            break;
    }
    let int2: number = 0;

    if (ifGetHide(Component.interface_1270.component_1270_7) == 0) {
        int2 = int2 + 1;
    }

    if (ifGetHide(Component.interface_1270.component_1270_48) == 0) {
        int2 = int2 + 1;
    }

    if (ifGetHide(Component.interface_1270.component_1270_50) == 0) {
        int2 = int2 + 1;
    }

    switch (int2) {
        case 0:
            ifSetHide(false, Component.interface_1270.component_1270_7);
            if (intArg1 == 1) {
                ifSetHide(false, Component.interface_1270.component_1270_61);
                ifSetHide(false, Component.interface_1270.component_1270_8);
            } else {
                ifSetHide(false, Component.interface_1270.component_1270_58);
            }
            break;
        case 1:
            ifSetHide(false, Component.interface_1270.component_1270_48);
            if (intArg1 == 1) {
                ifSetHide(false, Component.interface_1270.component_1270_62);
                ifSetHide(false, Component.interface_1270.component_1270_49);
            } else {
                ifSetHide(false, Component.interface_1270.component_1270_59);
            }
            break;
        case 2:
            ifSetHide(false, Component.interface_1270.component_1270_50);
            if (intArg1 == 1) {
                ifSetHide(false, Component.interface_1270.component_1270_63);
                ifSetHide(false, Component.interface_1270.component_1270_51);
            } else {
                ifSetHide(false, Component.interface_1270.component_1270_60);
            }
            break;
    }
}
