/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4258

function cs2_4258(intArg0: component): void {
    if (ifFind(intArg0) == 1) {
        ccSetPosition(0, 0, 1, 1);
        ccSetSize(16, 15, 0, 0);
        ccSetGraphic(Graphic.aif_bronze_close_button_1_1);
        ccHookMouseEnter(hook(hub_owl_wof65_valentines_shop_window_1_close_button, "Ii", [intArg0, 0]));
        ccHookMouseExit(hook(hub_owl_wof65_valentines_shop_window_1_close_button, "Ii", [intArg0, 1]));
        ccSetTrans(255);
    }
}
