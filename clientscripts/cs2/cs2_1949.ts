/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1949

function cs2_1949(intArg0: component, intArg1: number, intArg2: colour, intArg3: component): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetColour(intArg2);
        if (intArg3 != -1) {
            deltooltip_action(intArg3);
        }
    }
}
