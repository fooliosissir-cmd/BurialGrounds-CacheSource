/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,cruc_graphic_fade]

function cruc_graphic_fade(intArg0: number): void {
    let int1: number = 0;

    if (clientClock() % 6 == 0 && ccFind(Component.interface_1296.component_1296_14, intArg0) == 1) {
        int1 = ccGetTrans();
        if (int1 >= 235) {
            ccDelete();
            ifSetOnTimer(noHook(""), Component.interface_1296.component_1296_14);
        } else {
            ccSetTrans(int1 + 20);
        }
    }
}
