/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,brew_boiler2]

function brew_boiler2(intArg0: component, intArg1: component): void {
    if (varc_229 > 2) {
        ifSetModel(Model.model_15680, intArg0);
        ifSetColour(colour(0x33FF00), intArg1);
    } else {
        ifSetModel(Model.model_15679, intArg0);
        ifSetColour(colour(0x910000), intArg1);
    }
    ifSetText(tostring(varc_229), intArg1);
}
