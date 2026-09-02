/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3401

function cs2_3401(): void {
    if (varc_1274 < 0 || varc_1274 > ifGetHeight(Component.interface_909.component_909_61) - ifGetHeight(Component.interface_909.component_909_62)) {
        cs2_3404();
    } else {
        cs2_3403(varc_1274, true);
    }
    ifSetdraggable(59572285, -1, Component.interface_909.component_909_62);
    ifSetOnDrag(hook(cs2_3402, "i1", [event_mousey, false]), 59572286);
    ifSetOnDragComplete(hook(cs2_3402, "i1", [event_mousey, true]), 59572286);
}
