/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,login_hop_abort]

function proc_login_hop_abort(): void {
    let int0: component = Component.interface_596.component_596_44;

    if (hasBase64url() == 1) {
        int0 = Component.interface_975.component_975_44;
    }

    if (varc_loginscreen_hopblocked_time > 0) {
        ifSetOnClick(hook(clientscript_login_dologin, "", []), int0);
        ifSetOnTimer(noHook(""), int0);
        loginResetReply();
        proc_login_popup_close();
    }
}
