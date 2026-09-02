/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,regicide_still_total_bar]

function regicide_still_total_bar(intArg0: component, intArg1: number): void {
    if (varp_regicide_still_total > intArg1) {
        ifSetColour(colour(0x00FF00), intArg0);
    } else {
        ifSetColour(colour(0x000000), intArg0);
    }
}
