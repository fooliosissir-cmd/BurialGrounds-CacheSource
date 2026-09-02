/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3121

function cs2_3121(intArg0: component): void {
    if (ccFind(intArg0, 1) == 1) {
        ccSetHide(false);
        ccSetColour(colour(0x404040));
    }

    if (ccFind(intArg0, 2) == 1) {
        ccSetHide(false);
        ccSetColour(colour(0x606060));
    }
}
