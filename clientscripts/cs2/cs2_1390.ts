/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1390

function cs2_1390(intArg0: component, intArg1: component, strArg0: string): void {
    ifSetPosition(cs2_1551(varc_lobby_caret_clan, strArg0, Graphic.p11_full, ifGetX(intArg0)), 1, 0, 1, intArg1);

    if (appletHasFocus() == 1) {
        ifSetHide(false, intArg1);
    } else {
        ifSetHide(true, intArg1);
    }
    ifSetOnTimer(hook(cs2_1391, "iI", [clientClock(), intArg1]), intArg0);
}
