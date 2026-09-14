/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_entergame]

function proc_lobbyscreen_entergame(intArg0: component): void {
    if (varc_login_reply_last == 42 || varc_login_reply_last == 43) {
        return;
    }

    if (worldListFetch() == 0) {
        cs2_3064(0);
        ifSetOnTimer(hook(clientscript_lobbyscreen_entergame, "I", [intArg0]), intArg0);
        return;
    }
    let [int1, int2, int3, int4, str0, str1, str2] = worldListSpecific(mapWorld());

    if (int3 < 0) {
        lobby_popup(-5, 1, "Could not connect you to the chosen world. Please choose another.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
        cs2_3064(1);
        ifSetOnTimer(noHook(""), intArg0);
        return;
    }
    varc_1322 = 0;
    cs2_3064(1);
    ifSetOnTimer(noHook(""), intArg0);
    proc_lobby_popup_close();
    varc_login_reply_last = -1;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;

    if (cs2_2727() == 1 && varc_loginscreen_pvp_warned == 0) {
        cs2_3076(Component.interface_906.component_906_119);
        cs2_3074(Component.interface_906.component_906_117);
        cs2_3026(Component.interface_906.component_906_119);
        cs2_3025(Component.interface_906.component_906_117);
        ifSetHide(false, Component.interface_906.component_906_58);
        soundJingle(349, 0);
        cs2_3412(Component.interface_906.component_906_112, Component.interface_906.component_906_113);
        int7 = ifGetWidth(Component.interface_906.component_906_113);
        int8 = ifGetWidth(Component.interface_906.component_906_113);
        int5 = max(337, stringWidth(ifGetText(Component.interface_906.component_906_112), Graphic.b12_full) + 30);
        int8 = max(152, paraheight(ifGetText(Component.interface_906.component_906_113), int7, Graphic.b12_full) * 16);
        int6 = max(243, int8 + 91);
        ifSetSize(int7, int8, 0, 0, Component.interface_906.component_906_113);
        ifSetSize(int5, int6, 0, 0, Component.interface_906.component_906_110);
        return;
    }
    varc_loginscreen_hopblocked_time = 0;
    varc_lobby_video_ad_started = 0;
    cs2_3064(0);

    if (varp_2523 > 0) {
        cs2_5861(varp_2523);
    }
    lobbyEntergame();
    let int9: number = detailGetSoundVol();
    let int10: number = detailGetMusicVol();
    let int11: number = detailGetBgsoundvol();
    let int12: number = detailGetSpeechvol();
    let int13: number = detailGetLoginVol();
    ifSetOnTimer(hook(lobbyscreen_entergametimer, "Iiiiiii", [intArg0, mapWorld(), int9, int10, int11, int12, int13]), intArg0);
}
