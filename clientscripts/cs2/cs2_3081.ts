/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3081

function cs2_3081(intArg0: component): void {
    if (ccFind(intArg0, 3) == 1) {
        ccSetHide(true);
    }

    if (ccFind(intArg0, 4) == 1) {
        ccSetHide(true);
    }

    if (ccFind(intArg0, 5) == 1) {
        ccSetHide(true);
    }
}
