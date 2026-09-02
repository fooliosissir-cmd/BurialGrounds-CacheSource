/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1148

function cs2_1148(intArg0: number, intArg1: component, intArg2: graphic, intArg3: graphic, intArg4: boolean): void {
    if (intArg4 == true) {
        ifSetGraphic(intArg3, intArg1);
    } else {
        ifSetGraphic(intArg2, intArg1);
    }
}
