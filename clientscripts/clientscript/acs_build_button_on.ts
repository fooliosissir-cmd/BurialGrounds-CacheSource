/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,acs_build_button_on]

function acs_build_button_on(intArg0: component): void {
    if (ifFind(intArg0) == 1) {
        ccSetOnClick(hook(hub_owl_wof65_valentines_shop_window_1_close_button, "Ii", [intArg0, 0]));
        ccSetOnHold(hook(hub_owl_wof65_valentines_shop_window_1_close_button, "Ii", [intArg0, 0]));
        ccSetOnRelease(hook(hub_owl_wof65_valentines_shop_window_1_close_button, "Ii", [intArg0, 1]));
        ccSetTrans(255);
    }
}
