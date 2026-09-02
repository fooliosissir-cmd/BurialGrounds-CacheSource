/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,brew_buckets]

function brew_buckets(intArg0: component, intArg1: component): void {
    if (varc_226 > 4) {
        ifSetModel(Model.model_15690, intArg0);
        ifSetColour(colour(0x33FF00), intArg1);
    } else {
        ifSetModel(Model.model_15689, intArg0);
        ifSetColour(colour(0x910000), intArg1);
    }
    ifSetText(tostring(varc_226), intArg1);
}
