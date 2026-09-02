/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5210

function cs2_5210(intArg0: component): void {
    if (varbit_6448 == 1) {
        cs2_5211(true);
        return;
    }
    cs2_5211(false);
    ifSetOnVarTransmit(noHook(""), intArg0);
}
