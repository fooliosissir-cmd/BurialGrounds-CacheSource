/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4143

function cs2_4143(): void {
    let str0: string = "null";

    if (varbit_option_chat_filter_off == 1) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_4583), Component.interface_261.component_261_11);
        str0 = "Toggle Profanity Filter" + "<br>" + "(filter is currently off)";
        ifSetOnMouseOver(hook(cs2_5332, "IIsii", [event_com, Component.interface_261.component_261_31, str0, 25, 180]), Component.interface_261.component_261_11);
        varc_tooltip_built = 0;
    } else if (varbit_option_chat_filter_off == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_4584), Component.interface_261.component_261_11);
        str0 = "Toggle Profanity Filter" + "<br>" + "(filter is currently on)";
        ifSetOnMouseOver(hook(cs2_5332, "IIsii", [event_com, Component.interface_261.component_261_31, str0, 25, 180]), Component.interface_261.component_261_11);
        varc_tooltip_built = 0;
    }
    cs2_5643(Component.interface_261.component_261_11, (varbit_option_chat_filter_off + 1) % 2);
}
