/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1730

function cs2_1730(intArg0: component, intArg1: number): void {
    if ((intArg1 == -1 && ifFind(intArg0) == 1) || ccFind(intArg0, intArg1) == 1) {
        if (varc_flashing_int != 1) {
            ccSetHide(false);
            varc_flashing_int = 1;
            ccSetOnTimer(hook(cs2_2196, "Iis", [intArg0, intArg1, ccGetText()]));
        }
    }
}
