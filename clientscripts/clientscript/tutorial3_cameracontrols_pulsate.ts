/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,tutorial3_cameracontrols_pulsate]

function tutorial3_cameracontrols_pulsate(intArg0: number, intArg1: component, intArg2: component): void {
    let int3: number = 255 - cs2_1210(200, 75, intArg0, 0);

    if (intArg1 != -1) {
        ifSetTrans(int3, intArg1);
    }

    if (intArg2 != -1) {
        ifSetTrans(int3, intArg2);
    }
}
