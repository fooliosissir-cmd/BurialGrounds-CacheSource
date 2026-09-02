/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_report_abuse_ignore]

function lobbyscreen_report_abuse_ignore(): void {
    ifOpenSubClient(Component.interface_906.component_906_79, Interface.interface_913);
    ifSetHide(false, Component.interface_906.component_906_71);

    if (ifGetHide(enumOp(type_int, type_component, Enum.enum_941, 5)) == 0) {
        cs2_3161(0);
    }
    ifSetOnKey(hook(lobbyscreen_report_abuse_ignore_keyboard, "i", [event_keycode]), Component.interface_913.component_913_0);
}
