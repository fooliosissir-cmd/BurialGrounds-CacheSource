/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5122

function cs2_5122(intArg0: component, intArg1: number, intArg2: graphic, intArg3: colour): void {
    if (ccFind(intArg0, intArg1 + 1) == 1) {
        ccSetGraphic(intArg2);
    }

    if (ccFind(intArg0, intArg1 + 2) == 1) {
        ccSetColour(intArg3);
    }
}
