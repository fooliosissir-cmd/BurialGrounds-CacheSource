/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2585

function cs2_2585(): void {
    ifSetColour(colour(0xFF9935), Component.interface_292.component_292_116);
    ifSetOp(1, "Select light", Component.interface_292.component_292_110);
    ifSetOp(1, "Select heavy", Component.interface_292.component_292_111);
    ifSetOnOp(hook(cs2_2589, "I", [event_com]), Component.interface_292.component_292_110);
    ifSetOnOp(hook(cs2_2589, "I", [event_com]), Component.interface_292.component_292_111);
    ifSetOnClick(noHook(""), Component.interface_292.component_292_110);
    ifSetOnClick(noHook(""), Component.interface_292.component_292_111);
}
