/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,login_close]

function login_close(): void {
    ifSetOnResize(noHook(""), Component.interface_744.component_744_26);
    varcstr_33 = "";
    varc_1099 = 0;
    loginResetReply();
}
