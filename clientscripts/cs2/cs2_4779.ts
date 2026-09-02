/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4779

function cs2_4779(intArg0: component, intArg1: number, intArg2: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        if (intArg2 == 0) {
            ccSetHide(true);
        } else {
            ccSetHide(false);
        }
    }
}
