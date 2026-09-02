/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4636

function cs2_4636(): void {
    let int0: component = Component.interface_596.component_596_58;
    let int1: component = Component.interface_596.component_596_44;
    let int2: component = Component.interface_596.component_596_57;

    if (hasBase64url() == 1) {
        int0 = Component.interface_975.component_975_49;
        int1 = Component.interface_975.component_975_44;
    }
    ifSetText("Log In", int0);
    ifSetText("Log In", int2);
    ifSetOnClick(hook(clientscript_login_dologin, "", []), int1);
    ifSetOnTimer(noHook(""), int1);
    ifSetOnTimer(noHook(""), Component.interface_596.component_596_6);

    if (loginInprogress() == 1) {
        loginCancel();
    }
    loginResetReply();
    proc_login_popup_close();
    login_open(13);
}
