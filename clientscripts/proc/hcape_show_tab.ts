/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,hcape_show_tab]

function proc_hcape_show_tab(intArg0: number, intArg1: number): void {
    let int2: number = 25;
    let int3: number = ifGetWidth(Component.interface_1122.component_1122_67) * intArg0;

    if (intArg1 == 0) {
        ifSetScrollPos(int3, 0, Component.interface_1122.component_1122_68);
        ifSetHide(true, Component.interface_1122.component_1122_69);
        return;
    }
    ifSetHide(false, Component.interface_1122.component_1122_69);

    if (int3 < ifGetScrollX(Component.interface_1122.component_1122_68)) {
        int2 = 0 - int2;
    }
    ifSetOnTimer(hook(cs2_5191, "ii", [int3, int2]), Component.interface_1122.component_1122_68);
}
