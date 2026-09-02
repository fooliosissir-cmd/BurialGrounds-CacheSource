/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1999

function cs2_1999(intArg0: component, intArg1: boolean, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: number): void {
    let int9: number = varp_2525;
    let int10: number = varp_2526;
    let int11: number = varp_lobbyscreen_member_expires;
    let int12: number = varp_lobbyscreen_current_minute;

    if (intArg3 == 0 && (int10 != 0 || int11 != 0 || int12 != 0 || varp_2525 != 0)) {
        intArg3 = 1;
    }

    if (intArg3 == 1) {
        if (varc_lobby_video_ad_started == 1) {
            if (browserIssupported() != 0) {
            }
            if (browserIssupported() == 1) {
                proc_lobbyscreen_load(intArg1, intArg2);
                ifSetOnTimer(noHook(""), intArg0);
                detailSoundVol(intArg4);
                detailMusicVol(intArg5);
                detailBgsoundvol(intArg6);
                detailSpeechvol(intArg7);
                detailLoginVol(intArg8);
                varc_lobby_video_ad_started = 0;
                return;
            }
        } else {
            if (playerMember() == 0 && int11 > 0 && int11 < int12) {
                if (browserAgecheck(5) != 1) {
                }
                varc_lobby_video_ad_started = 1;
                cs2_5874();
                return;
            }
            if (dateRuneday() <= int9 + 30) {
                if (browserAgecheck(1) != 1) {
                }
                varc_lobby_video_ad_started = 1;
                cs2_5874();
            } else if (dateRuneday() <= int9 + 182) {
                if (browserAgecheck(2) != 1) {
                }
                varc_lobby_video_ad_started = 1;
                cs2_5874();
            } else if (dateRuneday() <= int9 + 365) {
                if (browserAgecheck(3) != 1) {
                }
                varc_lobby_video_ad_started = 1;
                cs2_5874();
            } else {
                if (browserAgecheck(4) != 1) {
                }
                varc_lobby_video_ad_started = 1;
                cs2_5874();
            }
        }
    }
}
