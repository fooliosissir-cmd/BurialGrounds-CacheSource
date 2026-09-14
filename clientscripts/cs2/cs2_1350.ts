/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1350

function cs2_1350(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: number, intArg5: number, intArg6: colour, strArg0: string): void {
    if (ccFind(intArg3, intArg4) == 1) {
        ccSetText(strArg0);
        ccSetColour(intArg6);
        ccSetOnMouseLeave(hook(cs2_1354, "Iii", [intArg3, intArg4, intArg6]));
    }
    cs2_1349(intArg3, intArg0, intArg1, intArg2, intArg5);
}
