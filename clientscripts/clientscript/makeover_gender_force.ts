/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,makeover_gender_force]

function makeover_gender_force(intArg0: number, intArg1: number, intArg2: component, intArg3: component): void {
    if (intArg0 != 1) {
        return;
    }
    makeover_gender(intArg1, intArg2, intArg3);
}
