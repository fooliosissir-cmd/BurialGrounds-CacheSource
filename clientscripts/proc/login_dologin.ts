/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,login_dologin]

function proc_login_dologin(): void {
    varc_login_reply_last = -1;

    if (hasSignonKey() == 0 && (stringLength(varcstr_32) == 0 || stringLength(varcstr_33) == 0)) {
        login_open(11);
        return;
    }
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    varc_loginscreen_hopblocked_time = 0;
    varc_201 = 0;
    let int4: component = Component.interface_596.component_596_58;
    let int5: component = Component.interface_596.component_596_44;

    if (hasSignonKey() == 1) {
        int4 = Component.interface_975.component_975_49;
        int5 = Component.interface_975.component_975_44;
    }
    ifSetText("Logging in...", int4);
    ifSetOnClick(noHook(""), int5);
    login_popup(-3, 0, "Logging In - Please Wait", 1, -1, 0, -1, "", 0, "");
    ifSetHide(true, Component.interface_596.component_596_8);
    varc_login_reply_last = -3;
    let str0: string = varcstr_32;
    let str1: string = varcstr_33;

    if (hasSignonKey() == 1) {
        str0 = "";
        str1 = "";
    }
    lobbyEnterLobby(str0, str1);

    if (hasSignonKey() == 1) {
        ifSetOnTimer(hook(login_reply, "i", [0]), Component.interface_975.component_975_26);
    } else {
        ifSetOnTimer(hook(login_reply, "i", [0]), Component.interface_596.component_596_6);
    }
}
