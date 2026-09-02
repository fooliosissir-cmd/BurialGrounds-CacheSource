/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5553

function cs2_5553(intArg0: component, intArg1: graphic, intArg2: graphic, intArg3: graphic, intArg4: graphic): void {
    if (ifGetGraphic(intArg0) == intArg1) {
        ifSetGraphic(intArg2, intArg0);
    }

    if (ifGetGraphic(intArg0) == intArg3) {
        ifSetGraphic(intArg4, intArg0);
    }
}
