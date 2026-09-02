/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2580

function cs2_2580(): void {
    ifSetColour(colour(0x666666), Component.interface_292.component_292_116);
    ifClearops(Component.interface_292.component_292_110);
    ifClearops(Component.interface_292.component_292_111);
    ifSetOnClick(hook(cs2_2606, "I", [event_com]), Component.interface_292.component_292_110);
    ifSetOnClick(hook(cs2_2606, "I", [event_com]), Component.interface_292.component_292_111);
}
