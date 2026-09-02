/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1879

function cs2_1879(intArg0: component, intArg1: component, strArg0: string): void {
    ifSetPosition(cs2_1551(varc_1097, strArg0, Graphic.verdana_11pt_regular, ifGetX(intArg0)), 4, 0, 0, intArg1);

    if (appletHasFocus() == 1) {
        ifSetHide(false, intArg1);
    } else {
        ifSetHide(true, intArg1);
    }
    ifSetOnTimer(hook(cs2_1880, "iI", [clientClock(), intArg1]), intArg0);
}
