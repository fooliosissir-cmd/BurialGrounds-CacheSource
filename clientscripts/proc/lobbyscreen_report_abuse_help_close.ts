/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_report_abuse_help_close]

function proc_lobbyscreen_report_abuse_help_close(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component): void {
    let int5: component = -1;
    let int6: number = 0;

    ifSetHide(true, intArg3);
    ifSetText("", intArg0);
    ifSetText("", intArg1);
    ifSetSize(ifGetWidth(intArg2), 300, 0, 0, intArg2);

    switch (intArg4) {
        case Component.interface_913.component_913_0:
            int5 = Component.interface_906.component_906_79;
            int6 = 300;
            break;
        case Component.interface_914.component_914_0:
            int5 = Component.interface_906.component_906_95;
            int6 = 122;
            break;
        case Component.interface_979.component_979_0:
            int5 = Component.interface_906.component_906_69;
            int6 = 303;
            break;
        case Component.interface_915.component_915_18:
            int5 = Component.interface_906.component_906_87;
            int6 = 312;
            break;
    }

    if (int5 != -1) {
        ifSetSize(ifGetWidth(int5), int6, 0, 0, int5);
        ifSetSize(ifGetWidth(intArg4), int6, 0, 0, intArg4);
    }
}
