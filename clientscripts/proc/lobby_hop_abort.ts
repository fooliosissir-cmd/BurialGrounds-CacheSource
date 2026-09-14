/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobby_hop_abort]

function proc_lobby_hop_abort(): void {
    if (varc_loginscreen_hopblocked_time > 0) {
        if (varc_lobby_video_ad_started == 1) {
            videoAdvertForceRemove();
            varc_lobby_video_ad_started = 0;
        }
        cs2_3064(1);
        ifSetOnTimer(noHook(""), Component.interface_906.component_906_186);
        proc_lobby_popup_close();
    }
}
