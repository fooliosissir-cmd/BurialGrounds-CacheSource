/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,brew_bark]

function brew_bark(intArg0: component, intArg1: component): void {
    if (varc_225 > 0) {
        ifSetModel(Model.model_15667, intArg0);
        ifSetColour(colour(0x33FF00), intArg1);
    } else {
        ifSetModel(Model.model_15659, intArg0);
        ifSetColour(colour(0x910000), intArg1);
    }
    ifSetText(tostring(varc_225), intArg1);
}
