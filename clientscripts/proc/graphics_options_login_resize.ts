/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_login_resize]

function proc_graphics_options_login_resize(intArg0: boolean): void {
    let int1: number = 0;

    if (intArg0 == false) {
        return;
    }
    let int2: number = 30;

    if (ifGetHeight(Component.interface_882.component_882_4) < ifGetHeight(Component.interface_882.component_882_22) + 146) {
        ifSetPosition(0, 0, 1, 1, Component.interface_882.component_882_8);
        ifSetPosition(0, ifGetY(Component.interface_882.component_882_8) + int2, 1, 0, Component.interface_882.component_882_22);
        ifSetHide(true, Component.interface_744.component_744_23);
    } else {
        int1 = ifGetY(Component.interface_744.component_744_23) + ifGetHeight(Component.interface_744.component_744_23);
        ifSetPosition(0, 0, 1, 1, Component.interface_882.component_882_8);
        if (ifGetY(Component.interface_882.component_882_8) - 2 < int1) {
            ifSetPosition(0, int1 + 2, 1, 0, Component.interface_882.component_882_8);
        }
        ifSetPosition(0, ifGetY(Component.interface_882.component_882_8) + int2, 1, 0, Component.interface_882.component_882_22);
        ifSetHide(false, Component.interface_744.component_744_23);
    }
}
