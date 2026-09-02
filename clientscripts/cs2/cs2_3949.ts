/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3949

function cs2_3949(intArg0: component, intArg1: number): void {
    if (intArg1 == 1) {
        ifSetColour(colour(0xFAFAFA), intArg0);
        ifSetText(append("<u=fafafa>", removetags(ifGetText(intArg0))), intArg0);
    } else {
        ifSetColour(colour(0xEBE0BC), intArg0);
        ifSetText(append("<u=ebe0bc>", removetags(ifGetText(intArg0))), intArg0);
    }
}
