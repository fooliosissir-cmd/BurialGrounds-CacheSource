/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5950

function cs2_5950(): void {
    if (varc_lobby_subscribe_flag == 0) {
        varc_lobby_subscribe_flag = 1;
        varc_lobby_lightbox_clock = clientClock();
        ifSetOnTimer(hook(cs2_6032, "", []), Component.interface_906.component_906_236);
    }
}
