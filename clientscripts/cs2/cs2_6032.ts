/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6032

function cs2_6032(): void {
    if (clientClock() < varc_lobby_lightbox_clock + 200) {
        return;
    } else {
        ifSetOnTimer(noHook(""), Component.interface_906.component_906_236);
        ifSetOnVarTransmit(hook(cs2_5951, "Y", [], [2527]), Component.interface_906.component_906_236);
        proc_lobby_popup_close();
        lobby_popup(-3, 0, "After you have completed your transaction, click continue to return to the game.", 0, Graphic.loadingwheel_14, 0, -1, "", "", 1, "Continue", "Continue");
        ifSetOnOp(hook(cs2_5953, "", []), Component.interface_906.component_906_258);
    }
}
