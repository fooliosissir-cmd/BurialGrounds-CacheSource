/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_entergametimer]

function lobbyscreen_entergametimer(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number): void {
    let int7: number = lobbyEntergamereply();

    if (int7 == -3) {
        cs2_3064(0);
        lobby_popup(int7, 0, "Logging In - Please Wait", 1, -1, 0, -1, "", "", 0, "", "");
        varc_login_reply_last = -3;
        return;
    }

    if (varc_login_reply_last == -3) {
        proc_lobby_popup_close();
    }
    let int8: number = 0;
    let str0: string = "";
    let int9: number = 0;
    let str1: string = "";
    let int10: number = 0;
    let str2: string = "";
    let int11: number = 0;
    let int12: number = 0;
    let str3: string = "";

    if (int7 == 21) {
        cs2_5874();
        varc_login_reply_last = 21;
        cs2_3064(0);
        if (varc_loginscreen_hopblocked_time == 0) {
            varc_loginscreen_hopblocked_time = loginHopTime();
            varc_lobby_video_ad_started = 0;
        }
        if (varc_loginscreen_hopblocked_time > 0) {
            varc_loginscreen_hopblocked_time = varc_loginscreen_hopblocked_time - 1;
        }
        if (varc_loginscreen_hopblocked_time <= 0) {
            if (worldListFetch() == 0) {
                varc_loginscreen_hopblocked_time = 1;
                return;
            }
            if (intArg1 > 0) {
                [int9, int10, int11, int12, str1, str2, str3] = worldListSpecific(intArg1);
                if (worldListSwitch(intArg1, str3) == 1) {
                    int9 = 0;
                }
            }
            ifSetOnTimer(noHook(""), intArg0);
            detailSoundVol(intArg2);
            detailMusicVol(intArg3);
            detailBgsoundvol(intArg4);
            detailSpeechvol(intArg5);
            detailLoginVol(intArg6);
            proc_lobbyscreen_entergame(intArg0);
            return;
        }
        int8 = varc_loginscreen_hopblocked_time / 50;
        if (int8 == 1) {
            str0 = "You have only just left another world. Your profile will be transferred in" + "<br>" + "1 second.";
        } else {
            str0 = "You have only just left another world. Your profile will be transferred in" + "<br>" + tostring(int8) + " seconds.";
        }
        if (ifGetHide(Component.interface_906.component_906_44) == 1) {
            lobby_popup(int7, 0, str0, 0, Graphic.loadingwheel_12, 1, 1, "Abort Login", "Abort Login", 0, "", "");
        } else {
            lobby_popup_text_update(str0);
        }
        return;
    }

    if (int7 == 42) {
        ifSetHide(false, Component.interface_906.component_906_55);
        ifSetText(tostring(intArg1), Component.interface_906.component_906_11);
        ifSetText(tostring(loginQueuePosition()), Component.interface_906.component_906_12);
        if (varc_login_reply_last != 42) {
            lobby_popup(int7, 1, "World " + tostring(intArg1) + " is currently full." + "<br>" + "You have been added to the" + "<br>" + "queue for this world." + "<br>" + "You can track your progress in the" + "<br>" + "queue from lower left corner of this" + "<br>" + "screen.", 0, Graphic.loadingwheel_12, 0, 0, "", "", 1, "OK", "OK");
        }
        varc_login_reply_last = 42;
        return;
    } else if (int7 == 43) {
        ifSetText(tostring(intArg1), Component.interface_906.component_906_11);
        ifSetText(tostring(loginQueuePosition()), Component.interface_906.component_906_12);
        varc_login_reply_last = 43;
        return;
    } else {
        ifSetHide(true, Component.interface_906.component_906_55);
    }

    if (intArg0 == Component.interface_906.component_906_0) {
        proc_lobbyscreen_load(true, 1);
    }
    proc_lobby_popup_close();
    cs2_3064(1);
    ifSetOnTimer(noHook(""), intArg0);
    let str4: string = "";
    let int13: number = 1;
    let int14: number = 0;
    let int15: graphic = Graphic.loadingwheel_9;
    let int16: number = 0;
    let int17: number = 0;
    let str5: string = "";
    let str6: string = "";
    let int18: number = 1;
    let str7: string = "Back";
    let str8: string = "Back";
    let int19: number = loginDisallowResult();
    let int20: number = loginDisallowTrigger();

    switch (int7) {
        case -2:
            proc_lobby_popup_close();
            return;
        case 29:
            switch (int19) {
                case 0:
                    str4 = "You must have a Combat Level of at least 20 (not including Summoning) to enter a PvP world.";
                    break;
                case 1:
                    str4 = "You are currently carrying lent items and cannot enter a PvP world.";
                    break;
                case 2:
                    str4 = "You must be standing in the Wilderness or Edgeville to enter this bounty world.";
                    break;
                case 3:
                    str4 = "You must have a total skill level of 1,000 or greater to enter this world.";
                    break;
                case 5:
                    str4 = "You must have a total skill level of 1,500 or greater to enter this world.";
                    break;
                case 4:
                    str4 = "You must move to a safe area before you can log in to a PvP or bounty world.";
                    break;
                default:
                    str4 = "Unexpected server response. Please try using a different world.";
                    break;
            }
            break;
        case 46:
            str4 = "This instance is marked for deletion/rebuild. Please try using a different world.";
            break;
        case 45:
            switch (int20) {
                case 0:
                    switch (int19) {
                        case 0:
                            str4 = "You must be near the TzHaar Fight Pits entrance to enter a global match.";
                            break;
                        default:
                            str4 = "Unable to log in. Please try using a different world.";
                            break;
                    }
                    break;
                case 1:
                    switch (int19) {
                        case 1:
                            str4 = "There was an error connecting to your meeting room. Please try again.";
                            break;
                        case 2:
                            str4 = "You need a higher rank to enter that private tent.";
                            break;
                        case 3:
                            str4 = "You need an invitation to enter that private room.";
                            break;
                        default:
                            str4 = "Unable to log in. Please try using a different world.";
                            break;
                    }
                    break;
                default:
                    str4 = "Unable to log in. Please try using a different world.";
                    break;
            }
            break;
        case -5:
            str4 = "Connection timed out. Please try using a different world.";
            break;
        case -4:
            str4 = "Error connecting to server.";
            break;
        case -1:
            str4 = "No response from server. Please try using a different world.";
            break;
        case 5:
            str4 = "Your account has not logged out from its last session. Try again in a few minutes.";
            break;
        case 7:
            str4 = "This world is full. Please use a different world.";
            break;
        case 8:
            str4 = "Unable to connect: login server offline.";
            break;
        case 9:
            str4 = "Login limit exceeded: too many connections from your address.";
            break;
        case 10:
            str4 = "Unable to connect: bad session id.";
            break;
        case 13:
            str4 = "Could not complete login. Please try using a different world.";
            break;
        case 16:
            str4 = "Too many incorrect logins from your address. Please wait 5 minutes before trying again.";
            break;
        case 17:
            str4 = "You are standing in a members-only area. To play on this world, move to a free area first.";
            break;
        case 20:
            str4 = "Invalid loginserver requested. Please try using a different world.";
            break;
        case 22:
            str4 = "Malformed login packet. Please try again.";
            break;
        case 23:
            str4 = "No reply from login server. Please wait a minute and try again.";
            break;
        case 24:
            str4 = "Error loading your profile. Please contact customer support.";
            break;
        case 25:
            str4 = "Unexpected loginserver response. Please try using a different world.";
            break;
        case 26:
            str4 = "This computer's address has been blocked, as it was used to break our rules.";
            break;
        case 27:
            str4 = "Service unavailable.";
            break;
        case 3:
            str4 = "Your password has been updated. Please leave the lobby and log in again.";
            break;
        case 36:
            str4 = "Unable to connect: authentication server offline.";
            break;
        case 37:
            str4 = "Your account is currently inaccessible. Please try again in a few minutes.";
            break;
        case 39:
            str4 = "The instance you tried to join no longer exists. Please try using a different world.";
            break;
        case 41:
            str4 = "The instance you tried to join is full. Please try back later or try using a different world.";
            break;
        case 44:
            str4 = "Our systems are currently unavailable. Please try again in a few minutes.";
            break;
        case 35:
            str4 = "Your session has expired. Return to the login screen and sign in again.";
            str7 = "Close";
            str8 = "Close";
            break;
        case 14:
            int13 = 0;
            int15 = Graphic.loadingwheel_11;
            str4 = "The server is being updated. Please wait a few minutes and try again.";
            break;
        case 6:
            int13 = 0;
            int15 = Graphic.loadingwheel_11;
            str4 = "Burial Grounds has been updated. Please restart the client.";
            break;
        case 4:
            str4 = "Your account has been disabled. Contact Burial Grounds staff for details.";
            break;
        case 11:
            str4 = "Your password must be changed before you can log in.";
            break;
        case 18:
            int15 = Graphic.loadingwheel_13;
            str4 = "Your account has been locked. Contact Burial Grounds staff if you need help restoring access.";
            break;
        case 31:
            str4 = "Your display name must be updated before you can log in.";
            break;
        case 30:
            str4 = "This world is not available for this account.";
            break;
        case 19:
            str4 = "Unable to enter the selected display mode while logging in.";
            break;
        case 12:
            int13 = 0;
            int15 = Graphic.loadingwheel_8;
            str4 = "This world is not available for this account.";
            break;
        case 40:
            int13 = 0;
            int15 = Graphic.loadingwheel_8;
            str4 = "This instance is not available for this account.";
            break;
        case 32:
            str4 = "This account cannot enter the selected world.";
            break;
        case 47:
            str4 = "You need to validate your email address to log in.";
            break;
        case 48:
            str4 = "Your game session has ended. Return to the login screen to play again.";
            break;
        default:
            str4 = "Unexpected server response. Please try using a different world.";
            break;
    }
    lobby_popup(int7, int13, str4, int14, int15, int16, int17, str5, str6, int18, str7, str8);
}
