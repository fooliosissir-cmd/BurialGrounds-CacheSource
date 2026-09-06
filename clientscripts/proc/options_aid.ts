/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,options_aid]

function options_aid(): void {
    let str0: string = "null";

    if (varp_427 == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_761), Component.interface_261.component_261_15);
        str0 = "Accept aid" + "<br>" + "(currently off)";
        ifSetOnMouseOver(hook(cs2_5332, "IIsii", [event_com, Component.interface_261.component_261_31, str0, 25, 180]), Component.interface_261.component_261_15);
        varc_tooltip_built = 0;
    } else if (varp_427 == 1) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_762), Component.interface_261.component_261_15);
        str0 = "Accept aid" + "<br>" + "(currently on)";
        ifSetOnMouseOver(hook(cs2_5332, "IIsii", [event_com, Component.interface_261.component_261_31, str0, 25, 180]), Component.interface_261.component_261_15);
        varc_tooltip_built = 0;
    }
    cs2_5641(Component.interface_261.component_261_15, varp_427);
}
