/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2920

function cs2_2920(strArg0: string, intArg0: number, intArg1: number): void {
    ifOpenSubClient(Component.interface_906.component_906_95, Interface.interface_914);
    lobbyscreen_report_abuse_stage1_clear();

    if (stringLength(strArg0) > 0) {
        varcstr_lobbyscreen_input = removetags(strArg0);
    } else {
        varcstr_lobbyscreen_input = "";
    }
    ifSetText(varcstr_lobbyscreen_input, Component.interface_914.component_914_27);

    if (ifGetHide(enumOp(type_int, type_component, Enum.enum_941, 5)) == 0) {
        cs2_3161(0);
    }
    ifSetOnKey(hook(lobbyscreen_report_abuse_stage1_keyboard, "izI", [event_keycode, event_keychar, event_com]), Component.interface_914.component_914_27);
    ifSetOnOp(hook(clientscript_lobbyscreen_report_abuse_stage1_next, "", []), Component.interface_914.component_914_16);
    varc_1097 = stringLength(varcstr_lobbyscreen_input);
    ifSetOnClick(hook(cs2_1878, "iII", [event_mousex, Component.interface_914.component_914_27, Component.interface_914.component_914_28]), Component.interface_914.component_914_27);
    cs2_1879(Component.interface_914.component_914_27, Component.interface_914.component_914_28, varcstr_lobbyscreen_input);
    ifSetHide(true, Component.interface_914.component_914_28);

    if (intArg0 == 1) {
        if (varc_snapshot_mute == 0) {
            ifSetGraphic(gameframe_skin_graphic(Graphic.check_box_2_0), Component.interface_914.component_914_23);
        } else {
            ifSetGraphic(gameframe_skin_graphic(Graphic.check_box_2_2), Component.interface_914.component_914_23);
        }
        if (intArg1 == 5 || intArg1 == 6) {
            ifSetText("Suggest to mute this player for 48 hours", Component.interface_914.component_914_22);
        } else {
            ifSetText("Mute this player for 48 hours", Component.interface_914.component_914_22);
        }
        ifSetSize(stringWidth(ifGetText(Component.interface_914.component_914_22), Graphic.verdana_11pt_regular) + 18, ifGetHeight(Component.interface_914.component_914_21), 0, 0, Component.interface_914.component_914_21);
        ifSetPosition(16, 32, 0, 0, Component.interface_914.component_914_14);
        ifSetPosition(21, 62, 0, 0, Component.interface_914.component_914_15);
        ifSetPosition(299, 60, 0, 0, Component.interface_914.component_914_16);
        ifSetHide(false, Component.interface_914.component_914_21);
    } else {
        ifSetPosition(16, 42, 0, 0, Component.interface_914.component_914_14);
        ifSetPosition(21, 82, 0, 0, Component.interface_914.component_914_15);
        ifSetPosition(299, 80, 0, 0, Component.interface_914.component_914_16);
        ifSetHide(true, Component.interface_914.component_914_21);
    }
    ifSetHide(false, Component.interface_906.component_906_60);
}
