/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3955

function cs2_3955(intArg0: number, intArg1: component): void {
    if ((clientClock() - intArg0) % 40 < 20 && appletHasFocus() == 1 && varc_create_displayname_in_progress == 0) {
        ifSetHide(false, intArg1);
    } else {
        ifSetHide(true, intArg1);
    }
}
