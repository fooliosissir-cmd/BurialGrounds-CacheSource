/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2958

function cs2_2958(): void {
    let int0: graphic = Graphic.small_button;
    let int1: graphic = Graphic.small_button_highlight;

    if (gameframe_skin_new() == true) {
        int0 = Graphic.graphic_8558;
        int1 = Graphic.graphic_8560;
        ifSetGraphic(Graphic.graphic_8558, Component.interface_751.component_751_15);
    }
    hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int1]), Component.interface_751.component_751_15);
    hookMouseExit(hook(graphic_swapper, "Id", [event_com, int0]), Component.interface_751.component_751_15);
}
