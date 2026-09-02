/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2952

function cs2_2952(intArg0: component, intArg1: component, intArg2: number): void {
    let str0: string = "";
    let str1: string = "";

    switch (intArg2) {
        case 3:
            str0 = "accountappeal";
            str1 = "passwordchoice.ws";
            ifSetOnClick(hook(clientscript_loginscreen_link, "ss1", [str0, str1, true]), intArg0);
            ifSetOnClick(hook(clientscript_login_popup_close, "", []), intArg1);
            break;
        case 4:
            str0 = "www";
            str1 = "account_settings.ws?mod=messages";
            ifSetOnClick(hook(clientscript_loginscreen_link, "ss1", [str0, str1, true]), intArg0);
            ifSetOnClick(hook(clientscript_login_popup_close, "", []), intArg1);
            break;
        case 11:
            str0 = "www";
            str1 = "account_settings.ws?mod=security";
            ifSetOnClick(hook(clientscript_loginscreen_link, "ss1", [str0, str1, true]), intArg0);
            ifSetOnClick(hook(clientscript_login_popup_close, "", []), intArg1);
            break;
        case 18:
            str0 = "accountappeal";
            str1 = "lockchoice.ws";
            ifSetOnClick(hook(clientscript_loginscreen_link, "ss1", [str0, str1, true]), intArg0);
            ifSetOnClick(hook(clientscript_login_popup_close, "", []), intArg1);
            break;
        case 30:
            str0 = "dob";
            str1 = "set_members_dob.ws";
            ifSetOnClick(hook(clientscript_loginscreen_link, "ss1", [str0, str1, true]), intArg0);
            ifSetOnClick(hook(clientscript_login_popup_close, "", []), intArg1);
            break;
        case 31:
            str0 = "www";
            str1 = "account_settings.ws?mod=charname";
            ifSetOnClick(hook(clientscript_loginscreen_link, "ss1", [str0, str1, true]), intArg0);
            ifSetOnClick(hook(clientscript_login_popup_close, "", []), intArg1);
            break;
        case 32:
        case 12:
        case 19:
        case 40:
            str0 = "dob";
            str1 = "set_members_dob.ws";
            ifSetOnClick(hook(clientscript_loginscreen_link, "ss1", [str0, str1, true]), intArg0);
            ifSetOnClick(hook(clientscript_login_popup_close, "", []), intArg1);
            break;
        case 21:
            ifSetOnClick(hook(clientscript_login_hop_abort, "", []), intArg0);
            ifSetOnClick(noHook(""), intArg1);
            break;
        default:
            ifSetOnClick(noHook(""), intArg0);
            ifSetOnClick(hook(clientscript_login_popup_close, "", []), intArg1);
            break;
    }
}
