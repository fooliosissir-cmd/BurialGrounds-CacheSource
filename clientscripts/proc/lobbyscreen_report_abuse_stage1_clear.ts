/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_report_abuse_stage1_clear]

function lobbyscreen_report_abuse_stage1_clear(): void {
    ifSetText("", Component.interface_914.component_914_27);
    ifSetOnKey(noHook(""), Component.interface_914.component_914_27);
    ifSetOnOpt(noHook(""), Component.interface_914.component_914_16);
    ifSetHide(true, Component.interface_914.component_914_21);
    ifSetGraphic(gameframe_skin_graphic(Graphic.check_box_2_0), Component.interface_914.component_914_23);
    varcstr_lobbyscreen_input = "";
    varc_lobbyscreen_report_abuse_bug = 0;
}
