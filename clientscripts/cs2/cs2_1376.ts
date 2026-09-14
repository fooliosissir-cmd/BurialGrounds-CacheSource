/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1376

function cs2_1376(intArg0: number, intArg1: component, intArg2: component): void {
    if (intArg0 == 1) {
        ifSetHide(false, Component.interface_755.component_755_47);
        ifSetOp(1, "Hide key", Component.interface_755.component_755_5);
        ifSetSize(ifGetWidth(Component.interface_755.component_755_47), 0, 1, 1, intArg1);
    } else {
        ifSetHide(true, Component.interface_755.component_755_47);
        ifSetOp(1, "Show key", Component.interface_755.component_755_5);
        ifSetSize(0, 0, 1, 1, intArg1);
    }
    worldmap_overlay_clear(intArg1);
    ifSetOnOp(hook(cs2_1375, "II", [intArg1, intArg2]), Component.interface_755.component_755_5);
}
