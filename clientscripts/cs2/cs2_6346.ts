/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6346

function cs2_6346(): void {
    if (varc_lobby_lightbox_clock < 1) {
        openurlShim("billing_core", "purchasepopup.ws?externalName=rs", "packagegroupredirect.ws?value=rs", 1);
        varc_lobby_lightbox_clock = clientClock();
        ifSetOnTimer(hook(cs2_6032, "", []), Component.interface_906.component_906_236);
    }
}
