/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5528

function cs2_5528(intArg0: number, intArg1: number, intArg2: number, intArg3: obj, intArg4: component): number {
    ccDeleteAll(intArg4);

    if (intArg3 == -1) {
        ifSetHide(true, intArg4);
        return intArg0;
    }
    cs2_5530(intArg0, intArg1, intArg3, intArg4);
    ifSetHide(false, intArg4);
    ifSetOnMouseOver(hook(cs2_5531, "iioI", [intArg0 - intArg2, intArg1 + intArg2 + intArg2, intArg3, intArg4]), intArg4);
    ifSetOnMouseLeave(hook(cs2_5529, "iioI", [intArg0, intArg1, intArg3, intArg4]), intArg4);
    return intArg0 + intArg1 + intArg2;
}
