/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_entergame]

function proc_lobbyscreen_entergame(intArg0: component): void {
    // If the Burial Grounds gate transition is already running, advance it
    // before doing any further login work. The animation state lives entirely
    // in dynamic children on the existing lobby blackout layer, so no new
    // persistent varc or video asset is required.
    let int20: number = ifGetWidth(Component.interface_906.component_906_335);
    let int21: number = ifGetHeight(Component.interface_906.component_906_335);
    let int22: number = max(8, int20 / 96);
    let int25: number = 0;

    if (ccFind(Component.interface_906.component_906_335, 0) == 1) {
        if (ccGetWidth() == 1) {
            int25 = 1;
        } else {
            let int23: number = ccGetX();

            if (int23 > 0 - int20 / 2 - 24) {
                ccSetPosition(int23 - int22, 0, 0, 0);

                if (ccFind(Component.interface_906.component_906_335, 1) == 1) {
                    ccSetPosition(ccGetX() + int22, 0, 0, 0);
                }
                if (ccFind(Component.interface_906.component_906_335, 2) == 1) {
                    ccSetPosition(ccGetX() - int22, 0, 0, 0);
                }
                if (ccFind(Component.interface_906.component_906_335, 3) == 1) {
                    ccSetPosition(ccGetX() + int22, 0, 0, 0);
                }
                if (ccFind(Component.interface_906.component_906_335, 4) == 1) {
                    ccSetTrans(min(255, ccGetTrans() + 7));
                }
                if (ccFind(Component.interface_906.component_906_335, 5) == 1) {
                    ccSetTrans(min(255, ccGetTrans() + 8));
                }
                return;
            }

            ccDeleteAll(Component.interface_906.component_906_335);
            ccCreate(Component.interface_906.component_906_335, 3, 0);
            ccSetSize(1, 1, 0, 0);
            ccSetPosition(0, 0, 0, 0);
            ccSetfill(true);
            ccSetColour(colour(0x000000));
            ccSetTrans(255);
            int25 = 1;
        }
    }

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

    // First successful Enter World press: play a one-second Greyhaven gate
    // transition before handing control to the native lobby login.
    if (int25 == 0) {
        ccDeleteAll(Component.interface_906.component_906_335);
        ifSetTrans(255, Component.interface_906.component_906_336);

        int20 = ifGetWidth(Component.interface_906.component_906_335);
        int21 = ifGetHeight(Component.interface_906.component_906_335);
        let int24: number = int20 / 2 + 8;

        // Left gate.
        ccCreate(Component.interface_906.component_906_335, 3, 0);
        ccSetSize(int24, int21, 0, 0);
        ccSetPosition(0, 0, 0, 0);
        ccSetfill(true);
        ccSetColour(colour(0x211E1A));
        ccSetTrans(0);

        // Right gate.
        ccCreate(Component.interface_906.component_906_335, 3, 1);
        ccSetSize(int24, int21, 0, 0);
        ccSetPosition(int20 / 2 - 8, 0, 0, 0);
        ccSetfill(true);
        ccSetColour(colour(0x25211C));
        ccSetTrans(0);

        // Inner gate seams.
        ccCreate(Component.interface_906.component_906_335, 3, 2);
        ccSetSize(3, int21, 0, 0);
        ccSetPosition(int20 / 2 - 3, 0, 0, 0);
        ccSetfill(true);
        ccSetColour(colour(0x756B57));
        ccSetTrans(0);

        ccCreate(Component.interface_906.component_906_335, 3, 3);
        ccSetSize(3, int21, 0, 0);
        ccSetPosition(int20 / 2, 0, 0, 0);
        ccSetfill(true);
        ccSetColour(colour(0x756B57));
        ccSetTrans(0);

        // Lore title.
        ccCreate(Component.interface_906.component_906_335, 4, 4);
        ccSetSize(int20, 44, 0, 0);
        ccSetPosition(0, int21 / 2 - 34, 0, 0);
        ccSetTextFont(Graphic.welcome_font_large);
        ccSetTextAlign(1, 1, 0);
        ccSetColour(colour(0xEBE0BC));
        ccSetText("GREYHAVEN");
        ccSetTrans(0);

        ccCreate(Component.interface_906.component_906_335, 4, 5);
        ccSetSize(int20, 24, 0, 0);
        ccSetPosition(0, int21 / 2 + 8, 0, 0);
        ccSetTextFont(Graphic.welcome_font_small);
        ccSetTextAlign(1, 1, 0);
        ccSetColour(colour(0xC9BE9D));
        ccSetText("THE GATES OPEN");
        ccSetTrans(0);

        cs2_3064(0);
        ifSetOnTimer(hook(clientscript_lobbyscreen_entergame, "I", [intArg0]), intArg0);
        return;
    }

    // Transition marker is no longer needed once the real login begins.
    if (int25 == 1 && ccFind(Component.interface_906.component_906_335, 0) == 1) {
        ccDelete();
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
