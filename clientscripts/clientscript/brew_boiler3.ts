/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,brew_boiler3]

function brew_boiler3(intArg0: component, intArg1: component): void {
    if (varc_230 > 2) {
        ifSetModel(Model.model_15682, intArg0);
        ifSetColour(colour(0x33FF00), intArg1);
    } else {
        ifSetModel(Model.model_15681, intArg0);
        ifSetColour(colour(0x910000), intArg1);
    }
    ifSetText(tostring(varc_230), intArg1);
}
