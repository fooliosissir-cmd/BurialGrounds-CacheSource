/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_showoverview]

function worldmap_showoverview(intArg0: number): void {
    if (intArg0 == 1) {
        ifSetHide(false, Component.interface_755.component_755_46);
        ifSetOp(1, "Hide overview", Component.interface_755.component_755_6);
    } else {
        ifSetHide(true, Component.interface_755.component_755_46);
        ifSetOp(1, "Show overview", Component.interface_755.component_755_6);
    }
    ifSetOnOp(hook(worldmap_toggleoverview, "", []), Component.interface_755.component_755_6);
}
