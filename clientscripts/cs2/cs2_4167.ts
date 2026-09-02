/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4167

function cs2_4167(intArg0: component, intArg1: number, intArg2: component): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetColour(colour(0xFF981F));
    }
    deltooltip_action(intArg2);
}
