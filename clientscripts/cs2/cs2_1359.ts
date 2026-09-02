/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1359

function cs2_1359(strArg0: string, strArg1: string): void {
    if (mapMembers() == 0) {
        ifSetOnMouseOver(hook(cs2_5484, "IIs", [event_com, Component.interface_335.component_335_56, strArg0]), Component.interface_335.component_335_44);
        ifSetOnMouseOver(hook(cs2_5484, "IIs", [event_com, Component.interface_335.component_335_56, strArg1]), Component.interface_335.component_335_45);
        varc_tooltip_built = 0;
    }
}
