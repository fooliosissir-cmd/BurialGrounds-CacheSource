/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_report_abuse_open]

function lobbyscreen_report_abuse_open(): number {
    if (ifHasSub(Component.interface_906.component_906_95) == 1) {
        return 1;
    }

    if (ifHasSub(Component.interface_906.component_906_69) == 1) {
        return 1;
    }

    if (ifHasSub(Component.interface_906.component_906_87) == 1) {
        return 1;
    }

    if (ifHasSub(Component.interface_906.component_906_79) == 1) {
        return 1;
    }
    return 0;
}
