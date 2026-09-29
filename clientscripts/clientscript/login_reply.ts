/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,login_reply]

function login_reply(intArg0: number): void {
    let int1: number = login_getreply();
    let int2: component = Component.interface_596.component_596_58;
    let int3: component = Component.interface_596.component_596_57;
    let int4: component = Component.interface_596.component_596_44;
    let int5: component = Component.interface_596.component_596_6;

    if (hasSignonKey() == 1) {
        int2 = Component.interface_975.component_975_49;
        int4 = Component.interface_975.component_975_44;
        int5 = Component.interface_975.component_975_26;
    }

    if (int1 == 42) {
        ifSetGraphic(Graphic.corner_flourish_2, Component.interface_744.component_744_97);
        ifSetHide(false, Component.interface_744.component_744_103);
        ifSetText(tostring(mapWorld()), Component.interface_744.component_744_130);
        ifSetText(tostring(loginQueuePosition()), Component.interface_744.component_744_131);
        varc_login_reply_last = 42;
        return;
    } else if (int1 == 43) {
        ifSetText(tostring(mapWorld()), Component.interface_744.component_744_130);
        ifSetText(tostring(loginQueuePosition()), Component.interface_744.component_744_131);
        varc_login_reply_last = 43;
        return;
    } else {
        ifSetHide(true, Component.interface_744.component_744_103);
        ifSetGraphic(Graphic.corner_flourish_0, Component.interface_744.component_744_97);
    }

    if (int1 == -3) {
        ifSetText("Logging in...", int2);
        ifSetText("Logging in...", int3);
        ifSetOnClick(noHook(""), int4);
        login_popup(int1, 0, "Logging In - Please Wait", 1, -1, 0, -1, "", 0, "");
        varc_login_reply_last = -3;
        return;
    }

    if (varc_login_reply_last == -3) {
        proc_login_popup_close();
    }
    let int6: number = 0;
    let str0: string = "";

    if (int1 == 21) {
        varc_login_reply_last = 21;
        ifSetText("Logging in...", int2);
        ifSetText("Logging in...", int3);
        ifSetOnClick(noHook(""), int4);
        if (varc_loginscreen_hopblocked_time == 0) {
            varc_loginscreen_hopblocked_time = loginHopTime();
        }
        varc_loginscreen_hopblocked_time = varc_loginscreen_hopblocked_time - 1;
        if (varc_loginscreen_hopblocked_time <= 0) {
            ifSetOnTimer(noHook(""), int4);
            if (intArg0 == 0) {
                proc_login_dologin();
            } else {
                cs2_4634(intArg0);
            }
            return;
        }
        int6 = varc_loginscreen_hopblocked_time / 50;
        if (int6 == 1) {
            str0 = "You have only just left another world. Your profile will be transferred in" + "<br>" + "1 second.";
        } else {
            str0 = "You have only just left another world. Your profile will be transferred in" + "<br>" + tostring(int6) + " seconds.";
        }
        if (ifGetHide(int5) == 1) {
            login_popup(int1, 0, str0, 0, Graphic.loadingwheel_12, 1, 1, "Abort Login", 0, "");
        } else {
            login_popup_text_update(str0);
        }
        return;
    }
    proc_login_popup_close();
    // Burial Grounds does not use RuneScape video-advert login gates.
    if (int1 == 1) {
        loginContinue();
        return;
    }

    if (hasSignonKey() == 1) {
        ifSetText("Play Game", int2);
        ifSetText("Play Game", int3);
    } else {
        ifSetText("Log In", int2);
        ifSetText("Log In", int3);
    }
    ifSetOnClick(hook(clientscript_login_dologin, "", []), int4);

    if (hasSignonKey() == 1) {
        ifSetOnTimer(noHook(""), Component.interface_975.component_975_26);
    } else {
        ifSetOnTimer(noHook(""), Component.interface_596.component_596_6);
    }
    let str2: string = "";
    let int8: number = 1;
    let int9: number = 0;
    let int10: graphic = Graphic.loadingwheel_9;
    let int11: number = 0;
    let int12: number = 0;
    let str3: string = "";
    let int13: number = 1;
    let str4: string = "Back";

    switch (int1) {
        case -2:
            proc_login_popup_close();
            if (hasSignonKey() == 1) {
                return;
            } else {
                login_open(11);
            }
            return;
        case 29:
            switch (loginDisallowResult()) {
                case 0:
                    str2 = "You must have a Combat Level of at least 20 (not including Summoning) to enter a PvP world.";
                    break;
                case 1:
                    str2 = "You are currently carrying lent items and cannot enter a PvP world.";
                    break;
                case 2:
                    str2 = "You must be standing in the Wilderness or Edgeville to enter this bounty world.";
                    break;
                case 3:
                    str2 = "You must have a total skill level of 1,000 or greater to enter this world.";
                    break;
                case 5:
                    str2 = "You must have a total skill level of 1,500 or greater to enter this world.";
                    break;
                case 4:
                    str2 = "You must move to a safe area before you can log in to a PvP or bounty world.";
                    break;
                default:
                    str2 = "Unexpected server response. Please try using a different world.";
                    break;
            }
            break;
        case 46:
            str2 = "This instance is marked for deletion/rebuild. Please try using a different world.";
            break;
        case 45:
            switch (loginDisallowTrigger()) {
                case 0:
                    switch (loginDisallowResult()) {
                        case 0:
                            str2 = "You must be near the TzHaar Fight Pits entrance to enter a global match.";
                            break;
                        default:
                            str2 = "Unable to log in. Please try using a different world.";
                            break;
                    }
                    break;
                case 1:
                    switch (loginDisallowResult()) {
                        case 1:
                            str2 = "There was an error connecting to your meeting room. Please try again.";
                            break;
                        case 2:
                            str2 = "You need a higher rank to enter that private tent.";
                            break;
                        case 3:
                            str2 = "You need an invitation to enter that private room.";
                            break;
                        default:
                            str2 = "Unable to log in. Please try using a different world.";
                            break;
                    }
                    break;
                default:
                    str2 = "Unexpected server response. Please try using a different world.";
                    break;
            }
            break;
        case -5:
            str2 = "Connection timed out. Please try using a different world.";
            break;
        case -4:
            str2 = "Error connecting to server.";
            break;
        case -1:
            str2 = "No response from server. Please try using a different world.";
            break;
        case 5:
            str2 = "Your account has not logged out from its last session. Try again in a few minutes.";
            break;
        case 7:
            str2 = "This world is full. Please use a different world.";
            break;
        case 8:
            str2 = "Unable to connect: login server offline.";
            break;
        case 9:
            str2 = "Login limit exceeded: too many connections from your address.";
            break;
        case 10:
            str2 = "Unable to connect: bad session id.";
            break;
        case 13:
            str2 = "Could not complete login. Please try using a different world.";
            break;
        case 16:
            str2 = "Too many incorrect logins from your address. Please wait 5 minutes before trying again.";
            break;
        case 17:
            str2 = "You are standing in a members-only area. To play on this world, move to a free area first.";
            break;
        case 20:
            str2 = "Invalid loginserver requested. Please try using a different world.";
            break;
        case 22:
            str2 = "Malformed login packet. Please try again.";
            break;
        case 23:
            str2 = "No reply from login server. Please wait a minute and try again.";
            break;
        case 24:
            str2 = "Error loading your profile. Please contact customer support.";
            break;
        case 25:
            str2 = "Unexpected loginserver response. Please try using a different world.";
            break;
        case 26:
            str2 = "This computer's address has been blocked, as it was used to break our rules.";
            break;
        case 27:
            str2 = "Service unavailable.";
            break;
        case 36:
            str2 = "Unable to connect: authentication server offline.";
            break;
        case 37:
            str2 = "Your account is currently inaccessible. Please try again in a few minutes.";
            break;
        case 39:
            str2 = "The instance you tried to join no longer exists. Please try using a different world.";
            break;
        case 41:
            str2 = "The instance you tried to join is full. Please try back later or try using a different world.";
            break;
        case 44:
            str2 = "Our systems are currently unavailable. Please try again in a few minutes.";
            break;
        case 35:
            str2 = "Your session has expired. Return to the login screen and sign in again.";
            str4 = "Close";
            break;
        case 14:
            int8 = 0;
            int10 = Graphic.loadingwheel_11;
            str2 = "The server is being updated. Please wait a few minutes and try again.";
            break;
        case 6:
            int8 = 0;
            int10 = Graphic.loadingwheel_11;
            str2 = "Burial Grounds has been updated. Please restart the client.";
            break;
        case 3:
            str2 = "Invalid username or password.";
            str4 = "Try Again";
            break;
        case 4:
            str2 = "Your account has been disabled. Contact Burial Grounds staff for details.";
            break;
        case 11:
            str2 = "Your password must be changed before you can log in.";
            break;
        case 18:
            int10 = Graphic.loadingwheel_13;
            str2 = "Your account has been locked. Contact Burial Grounds staff if you need help restoring access.";
            break;
        case 30:
            str2 = "This world is not available for this account.";
            break;
        case 31:
            str2 = "Your display name must be updated before you can log in.";
            break;
        case 19:
            str2 = "Unable to enter the selected display mode while logging in.";
            break;
        case 12:
            str2 = "This world is not available for this account.";
            break;
        case 40:
            str2 = "This instance is not available for this account.";
            break;
        case 32:
            str2 = "This account cannot enter the selected world.";
            break;
        case 47:
            str2 = "You need to validate your email address to log in.";
            break;
        case 48:
            str2 = "Your game session has ended. Return to the login screen to play again.";
            break;
        default:
            str2 = "Unexpected server response. Please try using a different world.";
            break;
    }
    login_popup(int1, int8, str2, int9, int10, int11, int12, str3, int13, str4);
    loginResetReply();
}
