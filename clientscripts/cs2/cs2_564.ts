/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_564

function cs2_564(): void {
    if (varc_1037 > ifGetHeight(Component.interface_746.component_746_52) - 117) {
        cs2_1652(true);
    } else {
        chatbox_resize_window();
    }
    ifSetdraggable(48889880, -1, Component.interface_746.component_746_49);
    ifSetOnDrag(hook(cs2_1649, "i1", [event_mousey, false]), 48889905);
    ifSetOnDragComplete(hook(cs2_1649, "i1", [event_mousey, true]), 48889905);
    ifSetdragrenderbehaviour(1, Component.interface_746.component_746_49);
}
