/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5810

function cs2_5810(intArg0: component): void {
    let int1: graphic = gameframe_skin_graphic(Graphic.aif_bronze_close_button_1_0);
    let int2: graphic = gameframe_skin_graphic(Graphic.aif_bronze_close_button_1_1);

    ifSetGraphic(int1, intArg0);
    ifSetOnMouseOver(hook(graphic_swapper, "Id", [event_com, int2]), intArg0);
    ifSetOnMouseLeave(hook(graphic_swapper, "Id", [event_com, int1]), intArg0);
}
