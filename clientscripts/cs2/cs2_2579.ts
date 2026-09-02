/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2579

function cs2_2579(): void {
    ifSetColour(colour(0x666666), Component.interface_292.component_292_117);
    ifClearops(Component.interface_292.component_292_102);
    ifClearops(Component.interface_292.component_292_104);
    ifClearops(Component.interface_292.component_292_103);
    ifSetOnClick(hook(cs2_2606, "I", [event_com]), Component.interface_292.component_292_102);
    ifSetOnClick(hook(cs2_2606, "I", [event_com]), Component.interface_292.component_292_104);
    ifSetOnClick(hook(cs2_2606, "I", [event_com]), Component.interface_292.component_292_103);
}
