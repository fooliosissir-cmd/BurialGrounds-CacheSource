/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3950

function cs2_3950(intArg0: component, intArg1: number): void {
    if (intArg1 == 1) {
        ifSetColour(colour(0xFAFAFA), intArg0);
        ifSetText(append("<u=fafafa>", removetags(ifGetText(intArg0))), intArg0);
    } else {
        ifSetColour(colour(0xCDBE9A), intArg0);
        ifSetText(append("<u=cdbe9a>", removetags(ifGetText(intArg0))), intArg0);
    }
}
