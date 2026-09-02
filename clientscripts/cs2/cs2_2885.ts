/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2885

function cs2_2885(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number): void {
    if (intArg5 != 2 && intArg5 != 3 && intArg5 != 4) {
        return;
    }
    deltooltip_action(Component.interface_187.component_187_17);
    varc_tooltip_time = 0;
    intArg4 = intArg4 + clientClock();

    if (ccFind(intArg0, intArg1) == 1) {
        ccSetTrans(intArg2);
        ccSetOnTimer(hook(cs2_1621, "Iiii", [intArg0, intArg1, intArg3, intArg4]));
    }
}
