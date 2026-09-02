/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5952

function cs2_5952(): void {
    let int0: number = varp_lobbyscreen_member_expires;
    let int1: number = varp_lobbyscreen_current_minute;
    let int2: number = 0;

    if (int2 == 0 && int0 != 0 && int1 != 0) {
        int2 = 1;
    }

    if (int2 == 1) {
        varc_lobby_lightbox_clock = 0;
        proc_lobby_popup_close();
        if (int0 > int1) {
            lobby_popup(-3, 0, "Click continue to log into a members world.", 0, Graphic.loadingwheel_14, 0, -1, "", "", 1, "Continue", "Continue");
            ifSetOnOpt(hook(cs2_5953, "", []), Component.interface_906.component_906_258);
        } else {
            lobby_popup(-3, 0, "We can't find your subscription. Click continue to log into a free to play world.", 0, Graphic.loadingwheel_15, 0, -1, "", "", 1, "Continue", "Continue");
            ifSetOnOpt(hook(cs2_5953, "", []), Component.interface_906.component_906_258);
        }
    }
}
