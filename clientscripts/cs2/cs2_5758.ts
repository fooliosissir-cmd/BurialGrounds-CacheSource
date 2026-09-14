/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5758

function cs2_5758(intArg0: component): void {
    if (ifFind(intArg0) == 1) {
        ccSetPosition(0, 0, 1, 1);
        ccSetSize(16, 15, 0, 0);
        ccSetGraphic(gameframe_skin_graphic(Graphic.aif_help_icon_1));
        ccSetOnMouseOver(hook(hub_owl_wof65_valentines_shop_window_1_close_button, "Ii", [intArg0, 0]));
        ccSetOnMouseLeave(hook(hub_owl_wof65_valentines_shop_window_1_close_button, "Ii", [intArg0, 1]));
        ccSetTrans(255);
    }
}
