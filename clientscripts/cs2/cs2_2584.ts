/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2584

function cs2_2584(): void {
    ifSetColour(colour(0xFF9935), Component.interface_292.component_292_117);
    ifSetOp(1, "Select dwarf", Component.interface_292.component_292_102);
    ifSetOp(1, "Select goblin", Component.interface_292.component_292_104);
    ifSetOp(1, "Select elf", Component.interface_292.component_292_103);
    ifSetOnOp(hook(cs2_2586, "I", [event_com]), Component.interface_292.component_292_102);
    ifSetOnOp(hook(cs2_2586, "I", [event_com]), Component.interface_292.component_292_104);
    ifSetOnOp(hook(cs2_2586, "I", [event_com]), Component.interface_292.component_292_103);
    ifSetOnClick(noHook(""), Component.interface_292.component_292_102);
    ifSetOnClick(noHook(""), Component.interface_292.component_292_104);
    ifSetOnClick(noHook(""), Component.interface_292.component_292_103);
}
