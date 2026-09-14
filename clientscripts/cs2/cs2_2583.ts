/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2583

function cs2_2583(): void {
    ifSetColour(colour(0xFF9935), Component.interface_292.component_292_114);
    ifSetOp(1, "Resupply", Component.interface_292.component_292_113);
    ifSetOnOp(hook(cs2_2592, "I", [event_com]), Component.interface_292.component_292_113);
    ifSetOnClick(noHook(""), Component.interface_292.component_292_113);
}
