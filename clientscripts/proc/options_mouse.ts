/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,options_mouse]

function options_mouse(): void {
    let str0: string = "null";

    if (varp_option_mouse == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_762), Component.interface_261.component_261_14);
        str0 = "Mouse buttons" + "<br>" + "(currently 2)";
        ifSetOnMouseRepeat(hook(cs2_5332, "IIsii", [event_com, Component.interface_261.component_261_31, str0, 25, 180]), Component.interface_261.component_261_14);
    } else if (varp_option_mouse == 1) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_761), Component.interface_261.component_261_14);
        str0 = "Mouse buttons" + "<br>" + "(currently 1)";
        ifSetOnMouseRepeat(hook(cs2_5332, "IIsii", [event_com, Component.interface_261.component_261_31, str0, 25, 180]), Component.interface_261.component_261_14);
    }
    cs2_5641(Component.interface_261.component_261_14, (varp_option_mouse + 1) % 2);
    varc_tooltip_built = 0;
}
