/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,brew_sweetgrub]

function brew_sweetgrub(intArg0: component, intArg1: component): void {
    if (varc_224 > 0) {
        ifSetModel(Model.model_15704, intArg0);
        ifSetColour(colour(0x33FF00), intArg1);
    } else {
        ifSetModel(Model.model_15703, intArg0);
        ifSetColour(colour(0x910000), intArg1);
    }
    ifSetText(tostring(varc_224), intArg1);
}
