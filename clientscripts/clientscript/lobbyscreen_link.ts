/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_link]

function lobbyscreen_link(intArg0: boolean, strArg0: string, strArg1: string): void {
    if (compare(strArg0, "dob") == 0 && compare(strArg1, "set_members_dob.ws") == 0) {
        openurlShim("billing_core", "purchasepopup.ws?externalName=rs", "packagegroupredirect.ws?value=rs", 1);
        varc_lobby_lightbox_clock = clientClock();
        ifSetOnTimer(hook(cs2_6032, "", []), Component.interface_906.component_906_236);
    } else if (compare(strArg0, "") != 0 && compare(strArg1, "") != 0) {
        openurl(strArg0, strArg1, intArg0);
    }
}
