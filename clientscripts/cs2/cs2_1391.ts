/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1391

function cs2_1391(intArg0: number, intArg1: component): void {
    if (activeClanChannelFindAffined() == 0) {
        ifSetText("", Component.interface_912.component_912_24);
        ifSetHide(true, intArg1);
        return;
    }

    if ((clientClock() - intArg0) % 40 < 20 && appletHasFocus() == 1) {
        ifSetHide(false, intArg1);
    } else {
        ifSetHide(true, intArg1);
    }
}
