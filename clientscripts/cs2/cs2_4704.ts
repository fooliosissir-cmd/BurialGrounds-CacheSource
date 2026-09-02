/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4704

function cs2_4704(): void {
    let [int0, int1, int2] = loginLastTransferReply();

    switch (int0) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            mes("Your password has been updated. Please leave the world and log in again.");
            break;
        case 4:
            mes("Your account has been disabled. Check your Message Centre for details.");
            break;
        case 5:
            mes("Your account has not logged out from its last session. Try again in a few minutes.");
            break;
        case 6:
            mes("RuneScape has been updated! Please try again in a few minutes.");
            break;
        case 7:
            mes("This world is full. Please try back later.");
            break;
        case 8:
            mes("Unable to connect: login server offline.");
            break;
        case 9:
            mes("Login limit exceeded: too many connections from your address.");
            break;
        case 10:
            mes("Unable to connect: bad session id.");
            break;
        case 11:
            mes("Your password is an extremely common choice, and is not secure. You must change it.");
            break;
        case 12:
            mes("You need a member's account to log in to this world.");
            break;
        case 13:
            mes("Could not complete login. Please try back later.");
            break;
        case 14:
            mes("The server is being updated. Please wait a few minutes and try again.");
            break;
        case 15:
            break;
        case 16:
            mes("Too many incorrect logins from your address. Please wait 5 minutes before trying again.");
            break;
        case 17:
            mes("You are standing in a members-only area. To play on this world, move to a free area first.");
            break;
        case 18:
            mes("Your account has been locked. If you have not received an account recovery email, please select 'Recover Account'.");
            break;
        case 19:
            mes("Fullscreen is currently a members-only feature. To log in, either exit fullscreen via the options menu or use a member's account.");
            break;
        case 20:
            mes("Invalid loginserver requested. Please try back later.");
            break;
        case 21:
            break;
        case 22:
            mes("Malformed login packet. Please try again.");
            break;
        case 23:
            mes("No reply from login server. Please wait a minute and try again.");
            break;
        case 24:
            mes("Error loading your profile. Please contact customer support.");
            break;
        case 25:
            mes("Unexpected loginserver response. Please try back later.");
            break;
        case 26:
            mes("This computer's address has been blocked, as it was used to break our rules.");
            break;
        case 27:
            mes("Service unavailable.");
            break;
        case 28:
            break;
        case 29:
            switch (loginReply()) {
                case 0:
                    mes("You must have a Combat Level of at least 20 (not including Summoning) to enter a PvP world.");
                    break;
                case 1:
                    mes("You are currently carrying lent items and cannot enter a PvP world.");
                    break;
                case 2:
                    mes("You must be standing in the Wilderness or Edgeville to enter this bounty world.");
                    break;
                case 3:
                    mes("You must have a total skill level of 1,000 or greater to enter this world.");
                    break;
                case 5:
                    mes("You must have a total skill level of 1,500 or greater to enter this world.");
                    break;
                case 4:
                    mes("You must move to a safe area before you can log in to a PvP or bounty world.");
                    break;
                default:
                    mes("Unexpected server response. Please try back later.");
                    break;
            }
            break;
        case 30:
            mes("This is not a member's account. Please choose a 'free' world from the website to play on this account.");
            break;
        case 31:
            break;
        case 32:
            mes("Your account has negative membership credit. Please log into the billing system to add credit to your account.");
            break;
        case 33:
            break;
        case 34:
            break;
        case 35:
            break;
        case 36:
            break;
        case 37:
            mes("Your account is currently inaccessible. Please try again in a few minutes.");
            break;
        case 38:
            break;
        case 39:
            mes("The instance you tried to join no longer exists. Please try back later.");
            break;
        case 40:
            mes("You need a member's account to log in to this instance.");
            break;
        case 41:
            mes("The instance you tried to join is full. Please try back later.");
            break;
        case 42:
            break;
        case 43:
            break;
        case 44:
            mes("Our systems are currently unavailable. Please try again in a few minutes.");
            break;
        case 48:
            mes("Client token failure - please reload this page.");
            break;
        case 45:
            switch (int2) {
                case 0:
                    switch (int1) {
                        case 0:
                            mes("You must be near the TzHaar Fight Pits entrance to enter a global match.");
                            break;
                        default:
                            mes("Unable to log in. Please try back later.");
                            break;
                    }
                    break;
                case 1:
                    switch (int1) {
                        case 1:
                            mes("There was an error connecting to your meeting room. Please try again.");
                            break;
                        case 2:
                            mes("You need a higher rank to enter that private tent.");
                            break;
                        case 3:
                            mes("You need an invitation to enter that private room.");
                            break;
                        default:
                            mes("Unable to log in. Please try back later.");
                            break;
                    }
                    break;
                case 4:
                    switch (int1) {
                        case 1:
                            mes("You need to clear some inventory space to enter a Flash Factory game.");
                            break;
                        case 2:
                            mes("You must dismiss your follower before entering a Flash Factory game.");
                            break;
                    }
                    break;
                default:
                    mes("Unable to log in. Please try back later.");
                    break;
            }
            break;
        case 46:
            mes("This instance is marked for deletion/rebuild. Please try again in a few minutes.");
            break;
        case 47:
            mes("You need to validate your email address to log in.");
            break;
    }
}
