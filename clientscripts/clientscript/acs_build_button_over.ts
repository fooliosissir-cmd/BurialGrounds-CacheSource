/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,acs_build_button_over]

function acs_build_button_over(intArg0: component): void {
    if (ifFind(intArg0) == 1) {
        ccSetOnMouseOver(hook(hub_owl_wof65_valentines_shop_window_1_close_button, "Ii", [intArg0, 0]));
        ccSetOnMouseLeave(hook(hub_owl_wof65_valentines_shop_window_1_close_button, "Ii", [intArg0, 1]));
        ccSetTrans(255);
    }
}
