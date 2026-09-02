/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_735

function cs2_735(intArg0: component, intArg1: component, intArg2: number, intArg3: graphic): void {
    deltooltip_action(intArg0);

    if (ccFind(intArg1, intArg2) == 1) {
        ccSetGraphic(intArg3);
    }
}
