/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2578

function cs2_2578(): void {
    ifSetColour(colour(0x666666), Component.interface_292.component_292_114);
    ifSetGraphic(Graphic.warning_icons_1, Component.interface_292.component_292_113);
    ifClearops(Component.interface_292.component_292_113);
    ifSetOnOpt(noHook(""), Component.interface_292.component_292_113);
    ifSetOnClick(hook(cs2_2606, "I", [event_com]), Component.interface_292.component_292_113);
}
