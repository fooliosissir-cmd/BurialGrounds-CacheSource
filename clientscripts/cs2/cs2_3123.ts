/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3123

function cs2_3123(intArg0: component): void {
    if (ccFind(intArg0, 1) == 1) {
        ccSetHide(true);
    }

    if (ccFind(intArg0, 2) == 1) {
        ccSetHide(true);
    }
}
