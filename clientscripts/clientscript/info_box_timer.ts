/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,info_box_timer]

function info_box_timer(intArg0: number): void {
    let int1: number = 0;

    if (intArg0 == 0) {
        while (int1 < 11) {
            cs2_5498(int1, Component.interface_1177.component_1177_0);
            int1 = int1 + 1;
        }
        if (ccFind(Component.interface_1177.component_1177_0, 9) == 1 && ccGetTrans() == 255) {
            info_reset();
        }
    } else if (ifFind(Component.interface_1177.component_1177_0) == 1) {
        ccSetOnTimer(hook(info_box_timer, "i", [intArg0 - 1]));
    }
}
