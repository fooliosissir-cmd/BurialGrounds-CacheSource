/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_field_editor_focus]

function proc_clan_field_editor_focus(intArg0: component, intArg1: number): void {
    let int2: number = 0;
    let int3: number = 0;

    if (ccFind(intArg0, intArg1) == 1) {
        if (ccGetHide() == 1) {
            int2 = (ifGetScrollWidth(Component.interface_1111.component_1111_12) - ifGetWidth(Component.interface_1111.component_1111_12)) / 2;
            int3 = int2;
        } else {
            int2 = ccGetX() + ccGetWidth() / 2 - ifGetWidth(Component.interface_1111.component_1111_12) / 2;
            int3 = ccGetY() + ccGetHeight() / 2 - ifGetHeight(Component.interface_1111.component_1111_12) / 2;
        }
    } else {
        int2 = (ifGetScrollWidth(Component.interface_1111.component_1111_12) - ifGetWidth(Component.interface_1111.component_1111_12)) / 2;
        int3 = int2;
    }
    ifSetScrollPos(int2, int3, Component.interface_1111.component_1111_12);
    cs2_5053(0, 0);
}
