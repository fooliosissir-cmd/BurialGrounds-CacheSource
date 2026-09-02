/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3398

function cs2_3398(intArg0: number, intArg1: number, intArg2: component): void {
    switch (intArg0) {
        case 84:
            cs2_3400();
            return;
        case 13:
            if (ifGetHide(Component.interface_915.component_915_102) == 0) {
                proc_lobbyscreen_report_abuse_help_close(Component.interface_979.component_979_64, Component.interface_979.component_979_65, Component.interface_979.component_979_51, Component.interface_979.component_979_43, Component.interface_979.component_979_0);
            } else {
                cs2_3391();
            }
            return;
        case 1:
            proc_lobbyscreen_report_abuse_help(2, Component.interface_979.component_979_64, Component.interface_979.component_979_65, Component.interface_979.component_979_51, Component.interface_979.component_979_43, Component.interface_979.component_979_0);
            return;
    }
}
