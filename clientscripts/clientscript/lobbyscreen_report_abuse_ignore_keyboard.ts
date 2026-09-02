/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_report_abuse_ignore_keyboard]

function lobbyscreen_report_abuse_ignore_keyboard(intArg0: number): void {
    switch (intArg0) {
        case 1:
            proc_lobbyscreen_report_abuse_help(7, Component.interface_913.component_913_14, Component.interface_913.component_913_15, Component.interface_913.component_913_3, Component.interface_913.component_913_2, Component.interface_913.component_913_0);
            break;
        case 13:
            if (ifGetHide(Component.interface_913.component_913_2) == 0) {
                proc_lobbyscreen_report_abuse_help_close(Component.interface_913.component_913_14, Component.interface_913.component_913_15, Component.interface_913.component_913_3, Component.interface_913.component_913_2, Component.interface_913.component_913_0);
            } else {
                proc_lobbyscreen_report_abuse_ignore_close();
            }
            break;
    }
}
