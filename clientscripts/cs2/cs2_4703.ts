/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4703

function cs2_4703(): void {
    ifSetHide(true, Component.interface_744.component_744_103);
    ifSetGraphic(Graphic.corner_flourish_0, Component.interface_744.component_744_97);
    varc_login_reply_last = -1;
    proc_login_popup_close();
    loginResetReply();
    ifSetText("Play Game", Component.interface_975.component_975_49);
    ifSetText("Play Game", Component.interface_596.component_596_58);
    ifSetText("Play Game", Component.interface_975.component_975_48);
    ifSetText("Play Game", Component.interface_596.component_596_57);
    ifSetOnClick(hook(clientscript_login_dologin, "", []), Component.interface_975.component_975_44);
    ifSetOnClick(hook(clientscript_login_dologin, "", []), Component.interface_596.component_596_44);
    ifSetOnTimer(noHook(""), Component.interface_975.component_975_26);
    ifSetOnTimer(noHook(""), Component.interface_596.component_596_6);
}
