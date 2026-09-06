/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_report_abuse_stage2]

function proc_lobbyscreen_report_abuse_stage2(): void {
    ifOpenSubClient(Component.interface_906.component_906_87, Interface.interface_915);
    ifSetHide(false, Component.interface_906.component_906_70);

    if (ifGetHide(enumOp(type_int, type_component, Enum.enum_941, 5)) == 0) {
        cs2_3161(0);
    }

    if (stringLength(varcstr_lobbyscreen_report_abuse_name) > 0) {
        ifSetText("Reporting: " + varcstr_lobbyscreen_report_abuse_name, Component.interface_915.component_915_49);
    } else {
        ifSetText("Report", Component.interface_915.component_915_49);
    }

    if (playermod() == 1 || staffmodlevel() > 0) {
        if (varc_snapshot_mute == 0) {
            ifSetGraphic(gameframe_skin_graphic(Graphic.check_box_2_0), Component.interface_915.component_915_46);
        } else {
            ifSetGraphic(gameframe_skin_graphic(Graphic.check_box_2_2), Component.interface_915.component_915_46);
        }
        if (playermodlevel() == 5 || playermodlevel() == 6) {
            ifSetText("Suggest to mute this player for 48 hours", Component.interface_915.component_915_47);
        } else {
            ifSetText("Mute this player for 48 hours", Component.interface_915.component_915_47);
        }
        ifSetSize(stringWidth(ifGetText(Component.interface_915.component_915_47), Graphic.verdana_11pt_regular) + 18, ifGetHeight(Component.interface_915.component_915_45), 0, 0, Component.interface_915.component_915_45);
        ifSetHide(false, Component.interface_915.component_915_45);
    } else {
        ifSetHide(true, Component.interface_915.component_915_45);
    }
    ifSetOnKey(hook(lobbyscreen_report_abuse_stage2_keyboard, "i", [event_keycode]), Component.interface_915.component_915_18);
}
