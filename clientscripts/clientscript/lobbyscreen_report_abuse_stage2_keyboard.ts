/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_report_abuse_stage2_keyboard]

function lobbyscreen_report_abuse_stage2_keyboard(intArg0: number): void {
    switch (intArg0) {
        case 85:
            if (ifGetHide(Component.interface_915.component_915_102) == 1) {
                proc_lobbyscreen_report_abuse_stage2_back();
            }
            break;
        case 1:
            proc_lobbyscreen_report_abuse_help(1, Component.interface_915.component_915_112, Component.interface_915.component_915_113, Component.interface_915.component_915_110, Component.interface_915.component_915_102, Component.interface_915.component_915_18);
            break;
        case 13:
            if (ifGetHide(Component.interface_915.component_915_102) == 0) {
                proc_lobbyscreen_report_abuse_help_close(Component.interface_915.component_915_112, Component.interface_915.component_915_113, Component.interface_915.component_915_110, Component.interface_915.component_915_102, Component.interface_915.component_915_18);
            } else {
                proc_lobbyscreen_report_abuse_stage2_close();
            }
            break;
    }
}
