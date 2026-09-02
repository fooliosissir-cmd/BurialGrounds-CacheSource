/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5093

function cs2_5093(intArg0: component, intArg1: number): void {
    varc_worldswitcher_pingtimer = max(varc_worldswitcher_pingtimer - 1, 0);

    if (ccFind(intArg0, intArg1) == 1) {
        ccSetText(cs2_5094());
    }
}
