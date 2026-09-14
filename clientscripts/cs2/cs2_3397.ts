/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3397

function cs2_3397(): void {
    ifSetText(varcstr_lobbyscreen_report_abuse_name, Component.interface_979.component_979_18);
    let int0: graphic = Graphic.login_lobby_button_10;
    let int1: graphic = Graphic.login_lobby_button_11;

    if (compare(varcstr_lobbyscreen_report_abuse_name, "") != 0) {
        ifSetText("Report : Select Player", Component.interface_979.component_979_40);
        ifSetTrans(0, Component.interface_979.component_979_10);
        ifSetTrans(0, Component.interface_979.component_979_11);
        ifSetTrans(0, Component.interface_979.component_979_12);
        ifSetTrans(0, Component.interface_979.component_979_13);
        ifSetOnMouseOver(hook(cs2_3071, "IdIdId", [Component.interface_979.component_979_10, int0, Component.interface_979.component_979_11, int1, Component.interface_979.component_979_12, int0]), Component.interface_979.component_979_9);
    } else {
        ifSetText("Report : Select Player", Component.interface_979.component_979_40);
        ifSetTrans(100, Component.interface_979.component_979_10);
        ifSetTrans(100, Component.interface_979.component_979_11);
        ifSetTrans(100, Component.interface_979.component_979_12);
        ifSetTrans(100, Component.interface_979.component_979_13);
        ifSetOnMouseOver(noHook(""), Component.interface_979.component_979_9);
    }
}
