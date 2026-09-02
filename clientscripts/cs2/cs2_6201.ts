/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6201

function cs2_6201(intArg0: number, intArg1: component): void {
    if ((clientClock() - intArg0) % 40 < 20 && appletHasFocus() == 1) {
        if ((varc_1920 == 1 && intArg1 != Component.interface_906.component_906_362) || (varc_1920 == 2 && intArg1 != Component.interface_906.component_906_369)) {
            ifSetHide(true, intArg1);
            return;
        }
        ifSetHide(false, intArg1);
    } else {
        ifSetHide(true, intArg1);
    }
}
