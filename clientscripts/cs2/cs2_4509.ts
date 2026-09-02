/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4509

function cs2_4509(intArg0: component): void {
    let int1: graphic = Graphic.close_buttons_0;
    let int2: graphic = Graphic.close_buttons_1;

    ifSetGraphic(int1, intArg0);
    hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int2]), intArg0);
    hookMouseExit(hook(graphic_swapper, "Id", [event_com, int1]), intArg0);
    ifSetOnOpt(hook(closebutton_click, "", []), intArg0);
}
