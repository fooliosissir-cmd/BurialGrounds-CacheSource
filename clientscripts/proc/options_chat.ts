/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,options_chat]

function options_chat(): void {
    let str0: string = "null";

    if (varp_171 == 1) {
        ifSetGraphic(Graphic.graphic_761, Component.interface_261.component_261_12);
        str0 = "Chat effects" + "<br>" + "(currently off)";
        ifSetOnMouseOver(hook(cs2_5332, "IIsii", [event_com, Component.interface_261.component_261_31, str0, 25, 180]), Component.interface_261.component_261_12);
        varc_tooltip_built = 0;
    } else if (varp_171 == 0) {
        ifSetGraphic(Graphic.graphic_762, Component.interface_261.component_261_12);
        str0 = "Chat effects" + "<br>" + "(currently on)";
        ifSetOnMouseOver(hook(cs2_5332, "IIsii", [event_com, Component.interface_261.component_261_31, str0, 25, 180]), Component.interface_261.component_261_12);
        varc_tooltip_built = 0;
    }
    cs2_5641(Component.interface_261.component_261_12, (varp_171 + 1) % 2);
}
