/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3095

function cs2_3095(intArg0: component, intArg1: component, intArg2: number): void {
    let str0: string = "";
    let str1: string = "";

    switch (intArg2) {
        case 4:
            str0 = "www";
            str1 = "account_settings.ws?mod=messages";
            ifSetOnOpt(hook(lobbyscreen_link, "ss1", [str0, str1, true]), intArg0);
            break;
        case 11:
            str0 = "www";
            str1 = "account_settings.ws?mod=security";
            ifSetOnOpt(hook(lobbyscreen_link, "ss1", [str0, str1, true]), intArg0);
            break;
        case 18:
            str0 = "accountappeal";
            str1 = "lockchoice.ws";
            ifSetOnOpt(hook(cs2_3089, "ss1", [str0, str1, true]), intArg0);
            break;
        case 31:
            str0 = "www";
            str1 = "account_settings.ws?mod=charname";
            ifSetOnOpt(hook(lobbyscreen_link, "ss1", [str0, str1, true]), intArg0);
            break;
        case 32:
        case 12:
        case 19:
        case 40:
        case 30:
        case -2000:
        case -3000:
            str0 = "dob";
            str1 = "set_members_dob.ws";
            ifSetOnOpt(hook(lobbyscreen_link, "ss1", [str0, str1, true]), intArg0);
            break;
        case 21:
            ifSetOnClick(hook(clientscript_lobby_hop_abort, "", []), intArg0);
            ifSetOnClick(noHook(""), intArg1);
            return;
        default:
            ifSetOnOpt(noHook(""), intArg0);
            break;
    }
    ifSetOnOpt(hook(clientscript_lobby_popup_close, "", []), intArg1);
}
