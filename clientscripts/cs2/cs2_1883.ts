/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1883

function cs2_1883(intArg0: number, intArg1: number, intArg2: number, intArg3: obj, strArg0: string, intArg4: component): number {
    ccDeleteAll(intArg4);

    if (intArg3 == -1) {
        ifSetHide(true, intArg4);
        return intArg0;
    }
    cs2_1885(intArg0, intArg1, intArg3, strArg0, intArg4);
    ifSetHide(false, intArg4);
    ifSetOnMouseOver(hook(cs2_1894, "iiosI", [intArg0 - intArg2, intArg1 + intArg2 + intArg2, intArg3, strArg0, intArg4]), intArg4);
    ifSetOnMouseLeave(hook(cs2_1884, "iiosI", [intArg0, intArg1, intArg3, strArg0, intArg4]), intArg4);
    return intArg0 + intArg1 + intArg2;
}
