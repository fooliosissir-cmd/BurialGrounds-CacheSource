/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1295

function cs2_1295(): void {
    ifSetColour(colour(0xFF0000), Component.interface_144.component_144_147);
    ifSetOnMouseLeave(hook(text_colour_swapper, "Ii", [event_com, colour(0xFF0000)]), Component.interface_144.component_144_147);
    ifSetHide(true, Component.interface_144.component_144_186);
    ifSetModel(Model.quest_hauntedmine_if_track_cart, Component.interface_144.component_144_187);
    ifSetModelAnim(1453, Component.interface_144.component_144_187);
}
